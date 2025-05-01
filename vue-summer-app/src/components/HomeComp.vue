<template>
    <div>
        <h1 class="text-center mt-5">Summer Online Camp 2K25</h1>
        <hr />
        <div class="row mx-3"> 
            <div class="col-md-4 ">
                <div class="card cardStyle">
                    <div class="card-body">
                        Art
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardStyle">
                    <div class="card-body">
                        Games
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card cardStyle">
                    <div class="card-body">
                        Cooking
                    </div>
                </div>
            </div>
        </div>

        <!--Table-->
        <div class="row pt-5 mx-4"> 
            <div class="col-md-12 border rounded shadow"> 
                <table class="table">
                    <thead>
                        <tr>
                        <th>SR No</th>
                        <th>Name</th>
                        <th>Total Seats</th>
                        <th>Available Seats</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Manadal Pen art</td>
                        <td>40</td>
                        <td>10</td>
                    </tr>
                    </tbody>
                </table>
                {{ $store.state.apiResp }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            apiArtData:[],
           
        }
    },
    async created(){
        await this.$store.dispatch("getArtActivities");
        console.log("resp",this.$store.state.apiResp)
       
    }
    
}
</script>

<style scoped>
.cardStyle {
    background-color: rgb(199, 171, 241);
    box-shadow:  5px 5px 0.5 black;
    height: 200px;
    font-size: 30px;
    display: flex;
    align-items: center;
    padding-top: 60px;
    
}

.cardStyle:hover {
    background-color: beige;
    box-shadow: 20px 20px 30px black ;
    font-size: 70px;
    padding-top: 20px;
}
</style>