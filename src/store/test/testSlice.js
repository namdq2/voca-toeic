import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        data: [
            {
                id: 1,
                name: "Part 1",
                description: "5 words",
                progress: 60,
                tests: [
                    {
                        id: 1,
                        name: 'Test 1',
                        description: "Level 1",
                        progress: 60,
                        questions: [
                            {
                                id: 1,
                                question: "What is this word mean? 1",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 2,
                                question: "What is this word mean?",
                                word: "certain",
                                correctAnswerId: 2,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "chắc chắn"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 3,
                                question: "What is this word mean?",
                                word: "resean",
                                correctAnswerId: 3,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "lý do"
                                    }
                                ]
                            },
                            {
                                id: 4,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 5,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Test 2',
                        description: "Level 2",
                        progress: 60,
                        questions: [
                            {
                                id: 1,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 2,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 3,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 4,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 5,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Part 2",
                description: "50 words",
                progress: 70,
                tests: [
                    {
                        id: 1,
                        name: 'Test 1',
                        description: "5 words",
                        progress: 60,
                        questions: [
                            {
                                id: 1,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 2,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 3,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 4,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 5,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Test 2',
                        description: "People",
                        progress: 60,
                        questions: [
                            {
                                id: 1,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 2,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 3,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 4,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            },
                            {
                                id: 5,
                                question: "What is this word mean?",
                                word: "pointing",
                                correctAnswerId: 1,
                                answers: [
                                    {
                                        id: 1,
                                        content: "chỉ trỏ"
                                    },
                                    {
                                        id: 2,
                                        content: "sắp xếp"
                                    },
                                    {
                                        id: 3,
                                        content: "hội nghị"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    reducers: {
        retrieve: (state) => {
            console.log(state);
        },
        updateProgress: (state, action) => {
            const { partId, testId, progress } = action.payload;
            const existingPart = state.data.find((part) => part.id == partId);
            if (!existingPart) {
                return;
            }
            const existingTest = existingPart.tests.find((test) => test.id == testId);
            if (!existingTest) {
                return;
            }
            existingTest.progress = progress;
        }
    },
})

export const selectTestById = (state, partId, testId) => {
    let existingPart = state.test.data.find((part) => part.id == partId);
    if (!existingPart) {
        return;
    }
    let existingTest = existingPart.tests.find((test) => test.id == testId);
    if (!existingTest) {
        return;
    }

    return existingTest;
}

export const { retrieve, updateProgress } = testSlice.actions;

export default testSlice.reducer;