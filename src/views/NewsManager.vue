<template>
  <div>
  <v-data-table style="padding-top: 15%;"
    :key="tablekey"
    :headers="headers"
    :items="items"
    sort-by="date"
    class="elevation-1"    
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>GESTION DE NOTICIAS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nueva noticia
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="Titulo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-textarea
                      v-model="editedItem.content"
                      label="Contenido"
                    ></v-textarea>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.author"
                      label="Autor"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-file-input
                      accept="image/*"
                      label="Archivo de Imagen (SÓLO .JPG/.PNG/.JPEG)"
                      id="file"
                      ref="file" v-on:change="handleFileUpload()" 
                    ></v-file-input>
                    <!-- CHECK CORRECT IMAGE POST -->
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>    
  </v-data-table>  
  <v-row class="my-10">
      <v-btn
        color="primary"
        class="mx-auto"
        @click="logout"
      >
          Cerrar Sesión
      </v-btn>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
export default {
 data() {
    return{
      tableKey: 0,
      items:[],
      editedItem: {        
        title: "",
        content:"",                                      
        author:'',        
      },
      file: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Titulo',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Contenido', value: 'content' },
        { text: 'Autor', value: 'author' },
        { text: 'Fecha', value: 'date' },
        { text: 'Imagen', value: 'image' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],      
      editedIndex: -1,
      defaultItem: {        
        title: "",
        content:"",                                      
        author:'',        
      },
    }
  },
  methods: {
    logout(){
      localStorage.removeItem('jwt')
      this.$router.push('/login')
    },
    forceRerender() {            
      this.tableKey += 1
    },
    initialize(){
      axios.get(`http://212.1.214.191:8081/news/`)
        .then(res => {
          if (res.data.error) {
            console.log(res.data.error);
            return;
          }            
          else {
            this.items = res.data          
          }
            console.log(res)
          }).catch(err => {
            console.log(err);
        })                  
    },
     editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      console.log("delete call", item._id)         
      confirm('Are you sure you want to delete this item?') && axios.post(`http://212.1.214.191:8081/news/delete`,{ id: item._id}).then(res => {
        if (res.data.error) {
          console.log(res.data.error);
          return;
        }                    
        this.initialize()        
        }).catch(err => {
          console.log(err);
      })            
    },

    close () {      
      this.dialog = false      
    },

    save () {      
      let formData = new FormData();      
      formData.append('files', this.file.files[0])
      formData.append('title', this.editedItem.title)
      formData.append('author', this.editedItem.author)
      formData.append('content', this.editedItem.content)      
      formData.append('image',"http://212.1.214.191:8081/public/"+this.file.files[0].name.toLowerCase())
      //IF NEW NEWS
      if (this.editedIndex == -1) {
        console.log("create call")        
        axios.post(`http://212.1.214.191:8081/news/create`,formData,{headers: {
        'Content-Type': 'multipart/form-data'
    }}).then(res => {
        if (res.data.error) {
          console.log(res.data.error);
          return;
        }                    
        this.initialize()
        }).catch(err => {
          console.log(err);
      })
      } 
      //IF EDITED NEWS
      else {
        console.log("update call")
        formData.append('_id', this.editedItem._id)
        axios.post(`http://212.1.214.191:8081/news/update`,formData,{headers: {
        'Content-Type': 'multipart/form-data'
    }}).then(res => {
        if (res.data.error) {
          console.log(res.data.error);
          return;
        }                    
        this.initialize()
        }).catch(err => {
          console.log(err);
      })
      }      
      this.close()      
    },
    handleFileUpload() {      
      this.file = document.querySelector('#file')
      console.log('>>>> 1st element in files array >>>> ', this.file.files[0].name);
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva noticia' : 'Editar noticia'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  mounted () {
    this.initialize()
  },
}
</script>

<style>

</style>
