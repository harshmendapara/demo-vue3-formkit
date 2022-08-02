<template>
  <div>
    <FormKit type="form" v-model="data" @submit="register">
      <FormKitSchema :schema="renderFields" />
    </FormKit>
  </div>
</template>
<script>
import { schema } from "./config";
import { onMounted, ref, watch } from "vue";

export default {
  name: "ExampleTwo",
  setup() {
    const data = ref({});
    const states = ref([]);
    const fields = ref([...schema]);
    const renderFields = ref([]);


    watch(data.value, () => {
      let selectedFields = []
      if (data.value && data.value.checkbox && data.value.checkbox.length > 0) {
        selectedFields = data.value.checkbox
      }
      renderFields.value = fields.value.filter(i => ['title', 'checkbox'].includes(i.id) || selectedFields.includes(i.name))
    });

    onMounted(() => {
      
      let tempArr = [...schema]

      const findCheckBoxIndex = tempArr.findIndex(i => i.id == 'checkbox')

      tempArr[findCheckBoxIndex].options = []

      tempArr.forEach(i => {
        if (i && i.name && typeof i.name != undefined && i.name != 'checkbox') {
          tempArr[findCheckBoxIndex].options.push(i.name)
        }
      })

      renderFields.value = tempArr.filter(i => ['title', 'checkbox'].includes(i.id))
    })


    return { data, fields, states, renderFields };
  },
  
};
</script>