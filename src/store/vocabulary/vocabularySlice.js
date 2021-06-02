import { createSlice } from "@reduxjs/toolkit";

export const vocabularySlice = createSlice({
    name: 'vocabulary',
    initialState: {
        data: [
            {
                id: 1,
                name: "Part 1",
                description: "5 words",
                progress: 60,
                words: [
                    {
                        id: 1,
                        english: 'pointing',
                        vietnamese: 'chỉ trỏ'
                    },
                    {
                        id: 2,
                        english: 'learning',
                        vietnamese: 'tựa vào'
                    },
                    {
                        id: 3,
                        english: 'pass',
                        vietnamese: 'vượt qua'
                    },
                    {
                        id: 4,
                        english: 'reach',
                        vietnamese: 'với tới'
                    }
                ]
            },
            {
                id: 2,
                name: "Part 2",
                description: "5 words",
                progress: 50,
                words: [
                    {
                        id: 1,
                        english: 'pointing 2',
                        vietnamese: 'chỉ trỏ'
                    },
                    {
                        id: 2,
                        english: 'learning 2',
                        vietnamese: 'tựa vào'
                    },
                    {
                        id: 3,
                        english: 'pass 2',
                        vietnamese: 'vượt qua'
                    },
                    {
                        id: 4,
                        english: 'reach 2',
                        vietnamese: 'với tới'
                    }
                ]
            }
        ]
    },
    reducers: {
        retrieve: (state) => {
            console.log(state);
        },
    },
})

export const { retrieve } = vocabularySlice.actions;
export default vocabularySlice.reducer;