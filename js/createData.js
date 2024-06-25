function createData() {

    V = 19; // Ensures V is between 3 and 10
    let nodes = [];
    for (let i = 1; i <= V; i++) {
      nodes.push({ id: i, label: cities[i - 1] });
    }
    // Prepares vis.js style nodes for our data
    nodes = new vis.DataSet(nodes);

    // Creating a tree like underlying graph structure
    let edges = [];
    //for (let i = 2; i <= V; i++) {
    //  let neigh = i - Math.floor(Math.random() * Math.min(i - 1, 3) + 1); // Picks a neighbour from i-3 to i-1
      edges.push({
        type: 0,
        from: 1,
        to: 2,
        color: "blue",
        label: String(3),
      });
   // }

    // Randomly adding new edges to graph
    // Type of bus is 0
    // Type of plane is 1
    // for (let i = 1; i <= V / 2;) {
    //   let n1 = Math.floor(Math.random() * V) + 1;
    //   let n2 = Math.floor(Math.random() * V) + 1;
    //   if (n1 !== n2) {
    //     if (n1 < n2) {
    //       let tmp = n1;
    //       n1 = n2;
    //       n2 = tmp;
    //     }
    //     // Seeing if an edge between these two vertices already exists
    //     // And if it does then of which kind
    //     let works = 0;
    //     for (let j = 0; j < edges.length; j++) {
    //       if (edges[j]["from"] === n1 && edges[j]["to"] === n2) {
    //         if (edges[j]["type"] === 0) works = 1;
    //         else works = 2;
    //       }
    //     }

    //     // Adding edges to the graph
    //     // If works == 0, you can add bus as well as plane between vertices
    //     // If works == 1, you can only add plane between them
    //     if (works <= 1) {
    //       if (works === 0 && i < V / 4) {
    //         // Adding a bus
    //         edges.push({
    //           type: 0,
    //           from: n1,
    //           to: n2,
    //           color: "blue",
    //           label: String(Math.floor(Math.random() * 70) + 31),
    //         });
    //       } else {
    //         // Adding a plane
    //         edges.push({
    //           type: 1,
    //           from: n1,
    //           to: n2,
    //           color: "blue",
    //           label: String(Math.floor(Math.random() * 50) + 1),
    //         });
    //       }
    //       i++;
    //     }
    //   }
    // }

    let e = document.getElementById("fromDiv");
    src = e.value;

    let ee = document.getElementById("toDiv");
    dst = ee.value;


    // getting from and to details from webpage
    let errorMessage = document.getElementById("error-message");

    // if (from == to) {
    //   errorMessage.style.display = "block";
    //   map.style.display = "none";

    // }
    // else {
    //   errorMessage.style.display = "none";
    //   map.style.display = "block";
    //   src = from;
    //   dst = to;
    // }

    // Setting the new values of global variables
    // src = 2;
    //dst = V;


    curr_data = {
      nodes: nodes,
      edges: edges,
    };
  }