<template>
  <div>
    <h1 class="text-center mt-5">Summer Online Camp 2K25</h1>
    <hr />
    <div class="row mx-3">
      <div class="col-md-4">
        <div class="card cardStyle">
          <div class="card-body">Art</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card cardStyle">
          <div class="card-body">Games</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card cardStyle">
          <div class="card-body">Cooking</div>
        </div>
      </div>
    </div>

    <!--Table-->

    <div class="row pt-5 mx-4">
      <div class="col-md-12 border rounded shadow">
        <div class="row">
          <div class="col-md-4 mt-3">
            <div class="input-group mb-3">
              <input
                type="search"
                class="form-control"
                placeholder="serach.."
                @change="searchTable($event)"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th v-for="(item, index) in artHeadings" :key="index">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filterArray" :key="index">
              <td>{{ index }}</td>
              <td>{{ item.activityName }}</td>
              <td>{{ item.totalSeats }}</td>
              <td>{{ item.availableSeats }}</td>
              <td>
                <button class="btn btn-light" @click="deleteRecord(item.id)">
                  Delete
                </button>
              </td>
              <td>
                <button class="btn btn-light" @click="updateRecord(item.id)">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {{ apiArtData }}
        <button @click="PostData">Post New data</button>
      </div>
    </div>
    <ChildCompforHome
      :propName="propName"
      @EventName="getEmmittedData"
    ></ChildCompforHome>
    <p>Emitted data from child:{{ emittedData }}</p>
  </div>
</template>

<script>
import ChildCompforHome from "./ChildCompforHome.vue";

export default {
  components: { ChildCompforHome },
  data() {
    return {
      apiArtData: [],
      artHeadings: [],
      propName: "hello",
      emittedData: "",
      provideData: "Hello Provide-Inject",
      filterArray:[]
    };
  },
  provide() {
    return {
      providedInfo: this.provideData,
    };
  },
  async created() {
    await this.$store.dispatch("getArtActivities");
    this.apiArtData = this.$store.state.apiResp;
    this.filterArray=this.apiArtData;
    this.getHeadings();
  },
  methods: {
    getHeadings() {
      for (let i = 0; i < this.apiArtData.length - 1; i++) {
        this.artHeadings = Object.keys(this.apiArtData[i]);
      }
      this.artHeadings=this.artHeadings.splice(2,3);
    },
    deleteRecord(id) {
      this.$store.dispatch("deleteArtActivity", id);
    },
    updateRecord(id) {
      this.$store.dispatch("updateArtActivity", id);
    },
    PostData() {
      this.$store.dispatch("postNewData");
    },
    getEmmittedData(data) {
      this.emittedData = data;
    },
    searchTable(event){
        console.log("search param",event.target.value)
        let param=event.target.value;
        if(param){
            this.filterArray= this.apiArtData.filter((item)=>{
                console.log("item",Object.values(item));
                // if( Object.values(item).includes(param)){
                //     console.log("truee")
                //     return item;
                // }
                return Object.values(item).some((i)=>{
                   return typeof(i)==='string' && i.toLowerCase().includes(param.toLowerCase());
                })

            
              
            });
        }
        
            
            
        console.log("search filter",this.filterArray)
    }
  }
};
</script>

<style scoped>
.cardStyle {
  background-color: rgb(199, 171, 241);
  box-shadow: 5px 5px 0.5 black;
  height: 200px;
  font-size: 30px;
  display: flex;
  align-items: center;
  padding-top: 60px;
}

.cardStyle:hover {
  background-color: beige;
  box-shadow: 20px 20px 30px black;
  font-size: 70px;
  padding-top: 20px;
}
</style>
