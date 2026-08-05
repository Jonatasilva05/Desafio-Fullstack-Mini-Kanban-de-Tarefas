package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"github.com/gorilla/mux"
)

func getTasks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(tasks)
}

func createTask(w http.ResponseWriter, r *http.Request) {

	var task Task

	err := json.NewDecoder(r.Body).Decode(&task)

	if err != nil {
		http.Error(w, "JSON inválido", http.StatusBadRequest)
		return
	}

	if task.Title == "" {
		http.Error(w, "Título é obrigatório", http.StatusBadRequest)
		return
	}

	task.ID = len(tasks) + 1

	tasks = append(tasks, task)

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(http.StatusCreated)

	json.NewEncoder(w).Encode(task)

}

func updateTask(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	id, _ := strconv.Atoi(params["id"])

	var updated Task

	json.NewDecoder(r.Body).Decode(&updated)

	for i, task := range tasks {

		if task.ID == id {

			updated.ID = id

			tasks[i] = updated

			json.NewEncoder(w).Encode(updated)

			return

		}

	}

	http.Error(w, "Tarefa não encontrada", http.StatusNotFound)

}

func deleteTask(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)

	id, _ := strconv.Atoi(params["id"])

	for i, task := range tasks {

		if task.ID == id {

			tasks = append(tasks[:i], tasks[i+1:]...)

			w.WriteHeader(http.StatusNoContent)

			return

		}

	}

	http.Error(w, "Tarefa não encontrada", http.StatusNotFound)

}