<template>
  <div>
    <FormKit type="form" v-model="data" @submit="register">
      <FormKitSchema :schema="fields" />
    </FormKit>
  </div>
</template>

<script>
// import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { schema, dummyData } from "./config";

export default {
  name: "ExampleOne",
  setup() {
    const data = ref({
      checkbox: ['firstname']
    });
    const states = ref([]);
    const fields = ref([...schema]);

    onMounted(() => {
      fetchAllState();
    });

    watch(data.value, () => {
      const findState = states.value.find((i) => i.value == data.value.state);
      if (findState && findState.cities && findState.cities.length > 0) {
        let tempStateArr = [...fields.value];
  
        const index = fields.value.findIndex((i) => i.name == "cities");
  
        tempStateArr[index].options = findState.cities;
    
        fields.value = tempStateArr;
  
        //this.$set(fields.value, index, newObj)
      }
    });

    const fetchAllState = async () => {
      try {
        // const data = await axios.get("http://localhost:3000/states");
        const data = dummyData
        states.value = JSON.parse(JSON.stringify(data.data))
        
        let tempStateArr = [...fields.value];

        const index = tempStateArr.findIndex((i) => i.name == "state");
        tempStateArr[index].options = JSON.parse(JSON.stringify(data.data))

        fields.value = tempStateArr;

        //this.$set(fields.value, index, newObj)3
      } catch (err) {
        console.log(err);
      } finally {
        // loader hide
      }
    };
    return { data, fields, states };
  },
};
</script>
