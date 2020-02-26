import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { slideIn, moveDown, slideOut } from "./../animations";

import {
  trigger,
  transition,
  useAnimation,
  stagger,
  animateChild,
  query,
  group
} from "@angular/animations";

interface Todo {
  text: string;
  done: boolean;
}
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
  animations: [
    trigger("todoAnimations", [
      transition(":enter", [
        group([
          query("h1", [useAnimation(moveDown)]),
          query("input", [useAnimation(moveDown)]),
          query("@todoItem", stagger(100, animateChild()))
        ])
      ])
    ]),

    trigger("todoItem", [
      transition(":enter", [useAnimation(slideIn)]),
      transition(":leave", [useAnimation(slideOut)])
    ])
  ]
})
export class TodoComponent implements OnInit {
  todos: any = [];
  text: string;
  public initDueTime: Date = new Date(2020, 2, 26);
  constructor() {
    this.todos = [
      { text: "Learn Angular", due: new Date() },
      { text: "Learn Kendo", due: new Date() },
      { text: "Item 1", due: new Date() },
      { text: "Item 2", due: new Date() }
    ];
  }

  ngOnInit() {}
  addTodo(input: HTMLInputElement) {
    this.todos = [{ text: input.value, due: this.initDueTime }, ...this.todos];
    input.value = "";
  }
  removeTodo(i) {
    this.todos.splice(i, 1);
  }

  getRandomNumberWithinReason(max, min = 1) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}
