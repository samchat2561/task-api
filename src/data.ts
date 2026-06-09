export interface Task{
    id: number;
    title: string;
    description: string;
    completed: boolean;
    imageUrl?: string;
    linkUrl?: string;
}

export let tasks: Task[] = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is a sample task",
        completed: false,
        imageUrl: "https://via.placeholder.com/150",
        linkUrl: "https://example.com"
    }
];

export default tasks;
