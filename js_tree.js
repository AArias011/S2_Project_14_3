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


var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0;

window.onload = makeTree;

//This function creates the node tree for the source article on the page 
function makeTree() {
      // This code creates the aside element fragment
      var birdBox = document.createElement("aside");
      birdBox.id = "treeBox";
      birdBox.innerHTML = "<h1>Node Tree </h1>";


      var tree = document.getElementById("main");

      tree.appendChild(birdBox);
      //this is the foundation of the node tree 
      var nodeList = document.createElement("ol");
      birdBox.appendChild(nodeList);
      //This code points to the elements in the CSS selector
      var sourceArticle = document.querySelector("#main article");

      makeBranches(sourceArticle, nodeList);
      //These commands to display the total count of nodes, element nodes, text nodes, and whitespace nodes
      document.getElementById("totalNodes").textContent = nodeCount;
      document.getElementById("elemNodes").textContent = elemCount;
      document.getElementById("textNodes").textContent = textCount;
      document.getElementById("wsNodes").textContent = wsCount;
}

//this function will be used to append node branches to the node tree diagram
function makeBranches(treeNode, nestedList) {
      nodeCount++;
      //This code creates the span element fragment
      var liElem = document.createElement("li");
      liElem.innerHTML += "+--";
      var spanElem = document.createElement("span");

      liElem.appendChild(spanElem);
      nestedList.appendChild(liElem);

      if (treeNode.nodeType === 1) {
            elemCount++;
            spanElem.setAttribute("class", "elementNode");
            spanElem.textContent = "<" + treeNode.nodeName + ">";
      } else if (treeNode.nodeType === 3) {
            textCount++;
            var textString = treeNode.nodeValue;
            // this determines whether a text node represents white space or not
            if (isWhiteSpaceNode(textString)) {
                  wsCount++;
                  spanElem.setAttribute("class", "whiteSpaceNode");
                  spanElem.textContent = "#text";
            } else {
                  spanElem.setAttribute("class", "textNode");
                  spanElem.textContent = textString;
            }

      }
      if (treeNode.childNodes.length > 0) {
            //This code creates the ordered list element fragment
            var newList = document.createElement("ol");
            newList.innerHTML = "|";
            nestedList.appendChild(newList);
            for (var n = treeNode.firstChild; n !== null; n = n.nextSibling) {
                  makeBranches(n, newList);
            }
      }

}


function isWhiteSpaceNode(tString) {
      return !(/[^\t\n\r ]/.test(tString));
}