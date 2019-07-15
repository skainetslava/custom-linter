export const testExamples = [
    {
        "block": "form",
        "content": [
            {
                "block": "form",
                "elem": "label",
                "content": {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            },
            // правильно
            { "block": "input", "mods": { "size": "l" } }
            // неправильно
            //{ "block": "input", "mods": { "size": "s" } }
        ]
    },
    {
        //     "block": "form",
        "content": [{
            "block": "form",
            "elem": "content",
            "content": { "block": "input", "mods": { "size": "l" } },
            // правильно
            //"mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "xxl" } }]
            // неправильно
            "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "xl" } }]
        },
        { "block": "input", "mods": { "size": "xl" } }]
    },
    {
        "block": "form",
        "content": {
            "block": "form",
            "elem": "content",
            "content": [
                // правильно
                {
                    "block": "form",
                    "elem": "content-item",
                    "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "xl" } }],
                    "content": { "block": "input", "mods": { "size": "l" } }
                },
                // неправильно
                {
                    "block": "form",
                    "elem": "content-item",
                    "mix": [{ "block": "form", "elem": "item", "mods": { "indent-b": "l" } }],
                    "content": { "block": "input", "mods": { "size": "l" } }
                },
                {
                    "block": "form",
                    "elem": "content-item",
                    "content": { "block": "input", "mods": { "size": "l" } }
                }
            ]
        }
    },
    {
        "block": "form",
        "content": [
            {
                "block": "form",
                "elem": "header",
                "content": [
                    // правильно
                    {
                        "block": "text",
                        "mods": {
                            "size": "xxl"
                        }
                    },
                    // неправильно
                    // {
                    //     "block": "text",
                    //     "mods": {
                    //         "size": "xl"
                    //     }
                    // }
                ]
            },
            {
                "block": "input",
                "mods": {
                    "size": "l"
                }
            }
        ]
    },
    {
        "block": "form",
        "content": [
            // правильно
            {
                "block": "form",
                "elem": "header",
                "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "l" } }]
            },
            // неправильно
            {
                "block": "form",
                "elem": "header",
                "mix": [{ "block": "form", "elem": "item", "mods": { "space-v": "s" } }]
            },
            {
                "block": "input",
                "mods": {
                    "size": "l"
                }
            }
        ]
    },
    {
        "block": "form",
        "content": [
            // правильно
            {
                "block": "form",
                "elem": "header",
                "mix": [{ "block": "form", "elem": "item", "mods": { "space-h": "xl" } }]
            },
            // неправильно
            // {
            //     "block": "form",
            //     "elem": "header",
            //     "mix": [{ "block": "form", "elem": "item", "mods": { "space-h": "s" } }]
            // },
            {
                "block": "input",
                "mods": {
                    "size": "l"
                }
            }
        ]
    },
    {
        "block": "form",
        "content": [
            {
                "block": "input",
                "mods": {
                    "size": "l"
                }
            },
            {
                "block": "form",
                "elem": "footer",
                "content": [
                    // правильно
                    {
                        "block": "text",
                        "mods": {
                            "size": "l"
                        }
                    },
                    // // неправильно
                    // {
                    //     "block": "text",
                    //     "mods": {
                    //         "size": "xxl"
                    //     }
                    // }
                ]
            }
        ]
    },
    {
        "block": "form",
        "content": [
            {
                "block": "input",
                "mods": {
                    "size": "l"
                }
            },
            {
                "block": "form",
                "elem": "footer",
                "content": [
                    // правильно

                    {
                        "block": "text",
                        "mods": { "type": "h1" }
                    },

                    // неправильно
                    {
                        "block": "text",
                        "mods": { "type": "h2" }
                    }

                ]
            }
        ]
    }
];