import { Node, Zone } from '../node';

interface Dictionary<T> {
    [Key: string]: T;
}

let temp = [
    {
        "mission": "Mission: Escape the Northern Undead Asylum",
        "description":
            "You woke up in Northern Undead Asylum. " +
            "You are destined for greater things. Escape the area.",
        "choices": [
            "Explore this mission.",
            "Mark mission as done. Show the next mission.",
        ],
    },
    {
        "mission": "Mission: Get your purpose from the Crestfallen Warrior",
        "description":
            "After you escape the Asylum, you find yourself at Firelink Shrine. " +
            "Sitting beside the bonfire is a man that will tell you what to do next.",
        "choice": [
            "Explore this mission.",
            "Mark mission as done. Show the next mission."
        ]
    },
    {
        "mission": "Mission: Ring the First Bell of Awakening",
        "description": ""
    }
]
