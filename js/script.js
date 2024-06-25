onload = function () {
  let curr_data, V, src, dst, distance = 0, estTime = 0;


  const container1 = document.getElementById("mynetwork");
  const container2 = document.getElementById("mynetwork2");
  const genNew = document.getElementById("generate-graph");
  const solve = document.getElementById("solve");
  const temptext = document.getElementById("temptext");
  const temptext2 = document.getElementById("temptext2");

  const cities = [
    "City Gate",
    "A.K Khan",
    "Alongkar",
    "Noya Bazar",
    "Boropool",
    "Agrabad",
    "Bohoddarhat",
    "New Market",
    "Chawkbazar",
    "Muradpur",
    "2 No. Gate",
    "MuriPara",
    "GEC",
    "Wasa",
    "Lalkhan Bazar",
    "Tiger pass",
    "Dewanhat",
    "Chowmuhoni",
  ];



  // initialise graph options
  const options = {
    interaction: {
      hover: true,
  },
    edges: {
      width: 2,
      labelHighlightBold: true,
      font: {
        size: 20,
      },
      
    },
    layout: {
      improvedLayout: true,
      randomSeed: 8
    },

    nodes: {
      font: "25px arial",
      scaling: {
        label: true,
      },
      shape: "icon",
      icon: {
        face: "FontAwesome",
        code: "\uf3c5",
        size: 25,
        color: "#088F8F",
      },
    },
  };



  // Initialize your network!
  // Network for question graph
  const network = new vis.Network(container1);
  network.setOptions(options);
  // Network for result graph
  const network2 = new vis.Network(container2);
  network2.setOptions(options);

  function createData() {

    V = 18; // 18 locations
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
    edges.push({
      type: 0,
      from: 2,
      to: 3,
      color: "blue",
      label: String(1.10),
    });
    edges.push({
      type: 0,
      from: 3,
      to: 4,
      color: "blue",
      label: String(1.70),
    });
    edges.push({
      type: 0,
      from: 4,
      to: 5,
      color: "blue",
      label: String(1.80),
    });
    edges.push({
      type: 0,
      from: 2,
      to: 16,
      color: "blue",
      label: String(6),
    });
    edges.push({
      type: 0,
      from: 2,
      to: 13,
      color: "blue",
      label: String(4.50),
    });
    edges.push({
      type: 0,
      from: 3,
      to: 17,
      color: "blue",
      label: String(4.20),
    });
    edges.push({
      type: 0,
      from: 4,
      to: 17,
      color: "blue",
      label: String(3),
    });
    edges.push({
      type: 0,
      from: 18,
      to: 17,
      color: "blue",
      label: String(1.60),
    });
    edges.push({
      type: 0,
      from: 17,
      to: 16,
      color: "blue",
      label: String(0.45),
    });
    edges.push({
      type: 0,
      from: 16,
      to: 15,
      color: "blue",
      label: String(1.30),
    });
    edges.push({
      type: 0,
      from: 15,
      to: 14,
      color: "blue",
      label: String(0.70),
    });
    edges.push({
      type: 0,
      from: 13,
      to: 14,
      color: "blue",
      label: String(2.10),
    });
    edges.push({
      type: 0,
      from: 13,
      to: 11,
      color: "blue",
      label: String(2.40),
    });
    edges.push({
      type: 0,
      from: 6,
      to: 18,
      color: "blue",
      label: String(0.35),
    });
    edges.push({
      type: 0,
      from: 6,
      to: 8,
      color: "blue",
      label: String(3.30),
    });
    edges.push({
      type: 0,
      from: 17,
      to: 8,
      color: "blue",
      label: String(2.60),
    });
    edges.push({
      type: 0,
      from: 16,
      to: 8,
      color: "blue",
      label: String(2.10),
    });
    edges.push({
      type: 0,
      from: 15,
      to: 8,
      color: "blue",
      label: String(2.80),
    });
    edges.push({
      type: 0,
      from: 14,
      to: 8,
      color: "blue",
      label: String(2.40),
    });
    edges.push({
      type: 0,
      from: 11,
      to: 10,
      color: "blue",
      label: String(1.40),
    });
    edges.push({
      type: 0,
      from: 7,
      to: 10,
      color: "blue",
      label: String(2),
    });
    edges.push({
      type: 0,
      from: 5,
      to: 12,
      color: "blue",
      label: String(2.60),
    });
    edges.push({
      type: 0,
      from: 6,
      to: 12,
      color: "blue",
      label: String(0.35),
    });

    edges.push({
      type: 0,
      from: 9,
      to: 11,
      color: "blue",
      label: String(4),
    });
    edges.push({
      type: 0,
      from: 9,
      to: 7,
      color: "blue",
      label: String(2.9),
    });

    let e = document.getElementById("fromDiv");
    src = e.value;

    let ee = document.getElementById("toDiv");
    dst = ee.value;


    // getting from and to details from webpage
    //let errorMessage = document.getElementById("error-message");

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



  genNew.onclick = function () {
    // Create new data and display the data
    createData();

    network.setData(curr_data);
    temptext2.innerText =
      "Find least time path from " + cities[src - 1] + " to " + cities[dst - 1];
    temptext.style.display = "inline";
    temptext2.style.display = "none";
    container2.style.display = "none";
    distan.style.display = "none";
    bookride.style.display = "none";
    container1.style.display = "inline";
  };

  solve.onclick = function () {
    // Create graph from data and set to display
    temptext.style.display = "none";
    temptext2.style.display = "none";
    container1.style.display = "none";
    container2.style.display = "inline";
    bookride.style.display = "block";
    distan.style.display = "block";
    network2.setData(solveData());
  };



  function djikstra(graph, sz, src) {
    let vis = Array(sz).fill(0);
    let dist = [];
    for (let i = 1; i <= sz; i++) dist.push([10000, -1]);
    dist[src][0] = 0;

    for (let i = 0; i < sz - 1; i++) {
      let mn = -1;
      for (let j = 0; j < sz; j++) {
        if (vis[j] === 0) {
          if (mn === -1 || dist[j][0] < dist[mn][0]) mn = j;
        }
      }

      vis[mn] = 1;
      for (let j in graph[mn]) {
        let edge = graph[mn][j];
        if (vis[edge[0]] === 0 && dist[edge[0]][0] > dist[mn][0] + edge[1]) {
          dist[edge[0]][0] = dist[mn][0] + edge[1];
          dist[edge[0]][1] = mn;
        }
      }
    }

    return dist;
  }

  function parseAndFormatFloat(inputString) {
    const parsedFloat = parseFloat(inputString);
    if (isNaN(parsedFloat)) {
      return null; // or throw an error, depending on your needs
    }
    return parseFloat(parsedFloat.toFixed(2));
  }

  function createGraph(data) {
    let graph = [];
    for (let i = 1; i <= V; i++) {
      graph.push([]);
    }

    for (let i = 0; i < data["edges"].length; i++) {
      let edge = data["edges"][i];
      const num = parseAndFormatFloat(edge["label"]);

      //console.log(num);

      //if (edge["type"] === 1) continue;
      graph[edge["to"] - 1].push([edge["from"] - 1, num]);
      graph[edge["from"] - 1].push([edge["to"] - 1, num]);
    }
    return graph;
  }

  function shouldTakePlane(edges, dist1, dist2, mn_dist) {
    let plane = 0;
    let p1 = -1,
      p2 = -1;
    for (let pos in edges) {
      let edge = edges[pos];
      if (edge["type"] === 1) {
        let to = edge["to"] - 1;
        let from = edge["from"] - 1;
        let wght = parseAndFormatFloat(edge["label"]);
        if (dist1[to][0] + wght + dist2[from][0] < mn_dist) {
          plane = wght;
          p1 = to;
          p2 = from;
          mn_dist = dist1[to][0] + wght + dist2[from][0];
        }
        if (dist2[to][0] + wght + dist1[from][0] < mn_dist) {
          plane = wght;
          p2 = to;
          p1 = from;
          mn_dist = dist2[to][0] + wght + dist1[from][0];
        }
      }
    }
    return { plane, p1, p2 };
  }

  function solveData() {
    const data = curr_data;
    distance = 0;
    estTime = 0;
    var e = document.getElementById("fromDiv");
    var from = e.value;

    var ee = document.getElementById("toDiv");
    var to = ee.value;


    // getting from and to details from webpage
    //let from = document.getElementById("fromMenu").value;
    //let to = document.getElementById("toMenu").value;
    let errorMessage = document.getElementById("error-message");

    if (from == to) {
      errorMessage.style.display = "block";
      map.style.display = "none";
      mynetwork2.style.display = "none";
      bookride.style.display = "none";
      distan.style.display = "none";
    }
    else {
      errorMessage.style.display = "none";
      map.style.display = "block";
      bookride.style.display = "block";
      src = from;
      dst = to;
      document.getElementById("fromd").setAttribute('value', cities[src - 1]);
      document.getElementById("tod").setAttribute('value', cities[dst - 1]);
    }

    // Creating adjacency list matrix graph from question data
    const graph = createGraph(data);

    // Applying djikstra from src and dst
    let dist1 = djikstra(graph, V, src - 1); //from
    let dist2 = djikstra(graph, V, dst - 1);

    // Initialise min_dist to min distance via bus from src to dst
    let mn_dist = dist1[dst - 1][0]; //dst -> to

    // See if plane should be used
    let { plane, p1, p2 } = shouldTakePlane(
      data["edges"],
      dist1,
      dist2,
      mn_dist
    );

    let new_edges = [];
    if (plane !== 0) {
      new_edges.push({
        arrows: { to: { enabled: true } },
        from: p1 + 1,
        to: p2 + 1,
        color: "green",
        label: String(plane),
      });
      // Using spread operator to push elements of result of pushEdges to new_edges
      new_edges.push(...pushEdges(dist1, p1, false));
      new_edges.push(...pushEdges(dist2, p2, true));
    } else {
      new_edges.push(...pushEdges(dist1, dst - 1, false));
    }
    const ans_data = {
      nodes: data["nodes"],
      edges: new_edges,
    };
    estTime = distance * 5;
    document.getElementById("fare").setAttribute('value', String(parseAndFormatFloat(distance * 10) + 10) + " ৳");
    distan.innerHTML = '<i class="text-success fa fa-car" aria-hidden="true"></i> ' + String(parseAndFormatFloat(distance)) + " KM " + '<i class="ms-3 text-success fa fa-clock-o" aria-hidden="true"></i> ' + String(parseAndFormatFloat(estTime)) + " Minutes Est.";
    return ans_data;
  }

  function pushEdges(dist, curr, reverse) {
    let tmp_edges = [];
    while (dist[curr][0] !== 0) {
      let fm = dist[curr][1];

      distance += parseAndFormatFloat(dist[curr][0] - dist[fm][0]);

      if (reverse)
        tmp_edges.push({
          arrows: { to: { enabled: true } },
          from: curr + 1,
          to: fm + 1,
          color: "blue",
          label: String(parseAndFormatFloat(dist[curr][0] - dist[fm][0])),
        });
      else
        tmp_edges.push({
          arrows: { to: { enabled: true } },
          from: fm + 1,
          to: curr + 1,
          color: "blue",
          label: String(parseAndFormatFloat(dist[curr][0] - dist[fm][0])),
        });
      curr = fm;
    }
    return tmp_edges;
  }

  genNew.click();


};


