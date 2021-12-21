<template>
    <h2>Day 2</h2>
    <h4>Part one</h4>
    <p>Position of submarine is {{ getSubmarinePosition(inputImport) }}</p>
    <h4>Part two</h4>
    <p>
        Position of submarine with aim is
        {{ getSubmarineAimPosition(inputImport) }}
    </p>
</template>

<script>
import input from "../data/input2.1";
import { ref } from "vue";

export default {
    name: "",
    components: {},
    props: {},
    setup() {
        const inputImport = ref(input);
        const testCode = [
            {
                direction: "forward",
                value: 5,
            },
            {
                direction: "down",
                value: 5,
            },
            {
                direction: "forward",
                value: 8,
            },
            {
                direction: "up",
                value: 3,
            },
            {
                direction: "down",
                value: 8,
            },
            {
                direction: "forward",
                value: 2,
            },
        ];
        return {
            inputImport,
            testCode,
        };
    },
    methods: {
        getSubmarinePosition(input) {
            let vertical = 0;
            let horizontal = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[i].direction === "forward") {
                    horizontal += input[i].value;
                }
                if (input[i].direction === "up") {
                    vertical -= input[i].value;
                }
                if (input[i].direction === "down") {
                    vertical += input[i].value;
                }
            }
            return vertical * horizontal;
        },
        getSubmarineAimPosition(input) {
            let aim = 0;
            let depth = 0;
            let horizontal = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[i].direction === "forward") {
                    horizontal += input[i].value;
                    if (aim !== 0) {
                        depth += aim * input[i].value;
                    }
                }
                if (input[i].direction === "up") {
                    aim -= input[i].value;
                }
                if (input[i].direction === "down") {
                    aim += input[i].value;
                }
                // console.log("horizontal: " + horizontal);
                // console.log("depth: " + depth);
                // console.log("aim: " + aim);
            }
            return depth * horizontal;
        },
    },
};
</script>
