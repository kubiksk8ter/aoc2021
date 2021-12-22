<template>
    <h2>Day 3</h2>
    <h4>Part one</h4>
    <p>
        Gamma rate: {{ getGammaRate(output) }} =>
        {{ getDecimalNumber(getGammaRate(output)) }}
    </p>
    <p>
        Epsilon rate: {{ getEpsilonRate(output) }} =>
        {{ getDecimalNumber(getEpsilonRate(output)) }}
    </p>
    <p>
        Power consumption of the submarine is
        {{
            getDecimalNumber(getGammaRate(output)) *
            getDecimalNumber(getEpsilonRate(output))
        }}.
    </p>
    <h4>Part two</h4>
    <p>
        Oxygen generator rating: {{ getOxygenGeneratorRating(output) }} =>
        {{ getDecimalNumber(getOxygenGeneratorRating(output)) }}
    </p>
    <p>
        CO2 scrubber rating: {{ getCO2ScrubberRating(output) }} =>
        {{ getDecimalNumber(getCO2ScrubberRating(output)) }}
    </p>
    <p>
        Life support rating of the submarine is
        {{
            getDecimalNumber(getOxygenGeneratorRating(output)) *
            getDecimalNumber(getCO2ScrubberRating(output))
        }}.
    </p>
</template>

<script>
import input from "../data/input3.1";
import { ref } from "vue";

export default {
    name: "",
    components: {},
    props: {},
    setup() {
        const inputImport = ref(input);
        const testCode = [
            "00100",
            "11110",
            "10110",
            "10111",
            "10101",
            "01111",
            "00111",
            "11100",
            "10000",
            "11001",
            "00010",
            "01010",
        ];
        const output = inputImport;
        return {
            inputImport,
            testCode,
            output,
        };
    },
    methods: {
        getDecimalNumber(value) {
            return parseInt(value, 2);
        },
        //part one
        getGammaRate(values) {
            let gammaRate = "";
            for (let char = 0; char < values[0].length; char++) {
                let one = 0;
                let zero = 0;
                for (let i = 0; i < values.length; i++) {
                    values[i].charAt(char) === "0" ? zero++ : one++;
                }
                one > zero ? (gammaRate += "1") : (gammaRate += "0");
            }
            return gammaRate;
        },
        getEpsilonRate(values) {
            let gammaRate = "";
            for (let char = 0; char < values[0].length; char++) {
                let one = 0;
                let zero = 0;
                for (let i = 0; i < values.length; i++) {
                    values[i].charAt(char) === "0" ? zero++ : one++;
                }
                one < zero ? (gammaRate += "1") : (gammaRate += "0");
            }
            return gammaRate;
        },

        //part two
        getOxygenGeneratorRating(values) {
            let rate = this.getGammaRate(values);
            let array = values;
            for (let char = 0; char < rate.length; char++) {
                if (array.length !== 1) {
                    let one = 0;
                    let zero = 0;
                    for (let i = 0; i < array.length; i++) {
                        array[i].charAt(char) === "0" ? zero++ : one++;
                    }
                    if (one === zero) {
                        array = array.filter((value) => {
                            if (value[char] == 1) {
                                return value;
                            }
                        });
                    } else {
                        array = array.filter((value) => {
                            if (value[char] === rate[char]) {
                                return value;
                            }
                        });
                    }
                }
                rate = this.getGammaRate(array);
            }
            return array;
        },
        getCO2ScrubberRating(values) {
            let rate = this.getEpsilonRate(values);
            let array = values;
            for (let char = 0; char < rate.length; char++) {
                if (array.length !== 1) {
                    let one = 0;
                    let zero = 0;
                    for (let i = 0; i < array.length; i++) {
                        array[i].charAt(char) === "0" ? zero++ : one++;
                    }
                    if (one === zero) {
                        array = array.filter((value) => {
                            if (value[char] == 0) {
                                return value;
                            }
                        });
                    } else {
                        array = array.filter((value) => {
                            if (value[char] === rate[char]) {
                                return value;
                            }
                        });
                    }
                }
                rate = this.getEpsilonRate(array);
            }
            return array;
        },
    },
};
</script>
