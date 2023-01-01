<template>
    <div  class="size-selector widget-wrapper" >
    <template :key="index" v-for="(entry, index) in sizes">
      <label  :class="_classStringToObject(`radio-label ${entry[1] === selectedSize ? 'selected' : ''}`)"  :for="`radio-${entry[0].toLowerCase()}`" >
          <input  type="radio"  class="radio-item sr-only"  name="size-option"  :id="`radio-${entry[0].toLowerCase()}`"  :value="entry[1]"  @input="handleChange($event)"  />
          <div  :class="_classStringToObject(`size-dot ${entry[0].toLowerCase()}`)" ></div>
        </label>
    </template>
  </div>
  </template>


  <script  lang='ts'>
    
    import type { SizeSelectorProps } from "./size-selector.utils";

    
  import { AvatarSize, sizes } from '../utils/common.utils';
  
  


    
      export default {
      name: 'size-selector',
      
      props: ['onChange','size'],
      
      data: () => ({ selectedSize: AvatarSize.Medium,sizes}),
      

      
      
      
      mounted() {
              this.selectedSize = this.size || AvatarSize.Medium
            },
      
      watch: {
          onUpdateHook0: { handler() { this.selectedSize = this.size || AvatarSize.Medium }, immediate: true }
        },
      

      
        computed: { onUpdateHook0() {
return {
  0: this.size
};
},},
      
      
        methods: {  handleChange(event) {
const newSize = event?.target?.value || AvatarSize.Medium;
this.selectedSize = newSize;
this.onChange(newSize);
},_classStringToObject(str) {
      const obj = {};
      if (typeof str !== 'string') { return obj }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    }  },
      
      
    }
  </script>