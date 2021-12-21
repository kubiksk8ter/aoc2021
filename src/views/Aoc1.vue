<template>
  <h2>Day 1</h2>
  <h4>Part One</h4>
  <!-- ţest code [199, 200, 208, 210, 200, 207, 240, 269, 260, 263] -->
  <p>
    {{ getNumOfLargerMeasur(inputImport) }} measurements are larger than the
    previous measurement.
  </p>
  <h4>Part two</h4>
  <p>
    {{ getNumOfLargerTreeMeasur(inputImport) }}
    tree measurements are larger than the previous tree measurement.
  </p>
</template>

<script>
import input from "../data/input1.1";
import { ref } from "vue";

export default {
  name: "",

  components: {},

  props: {},

  setup() {
    const inputImport = ref(input);

    return {
      inputImport,
    };
  },

  methods: {
    getNumOfLargerMeasur(input) {
      let largerMeasurement = 0;
      for (let i = 1; i <= input.length; i++) {
        if (input[i] > input[i - 1]) {
          largerMeasurement += 1;
        }
      }
      return largerMeasurement;
    },

    getNumOfLargerTreeMeasur(input) {
      let largerTreeMeasurement = 0;
      for (let i = 0; i <= input.length; i++) {
        const firstTree = input[i] + input[i + 1] + input[i + 2];
        const secondTree = input[i + 1] + input[i + 2] + input[i + 3];
        if (firstTree < secondTree) {
          largerTreeMeasurement += 1;
        }
      }
      return largerTreeMeasurement;
    },
  },
};
</script>
