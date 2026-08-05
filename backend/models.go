package main

type Task struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      string `json:"status"`
}

var tasks = []Task{
	{
		ID:          1,
		Title:       "Estudar React",
		Description: "Aprender componentes",
		Status:      "todo",
	},
}