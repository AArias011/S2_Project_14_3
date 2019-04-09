"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

  Author: Anthony Arias
   Date:   4/5/19  

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/
window.onload = makeTree;

var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

//This function creates the node tree for the source article on the page 
function makeTree() {
      var birdBox = document.createElement("aside");
      birdBox.setAttribute("id", "treeBox");
      var nodeTree = document.createElement("h1");
      nodeTree.textContent = "Node Tree";

      birdBox.appendChild(nodeTree);
      document.getElementById("main").appendChild(birdBox);

      var nodeList = document.createElement("ol");
      birdBox.appendChild(nodeList);

      var sourceArticle = document.querySelectorAll("#main article");

      makeBranches(sourceArticle, nodeList);

}

//this function will be used to append node branches to the node tree diagram
function makeBranches(treeNode, nestedList) {
      nodeCount += 1;
      var liElem = document.createElement("li");
      liElem.innerHTML += "+--";
      var spanElem = document.createElement("span");

      liElem.appendChild(spanElem);
      nestedList.appendChild(liElem);

      elemCount += 1;

      if (treeNode === n) {
            var spanElem = document.createAttribute("");
      }

}


function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}