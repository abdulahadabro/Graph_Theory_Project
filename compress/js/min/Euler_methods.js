function printEuler(e,t){if(!isConnected(e))return console.log("Graph is not Eulerian"),MAIN_GRAPHS[t].isEulerian=!1,MAIN_GRAPHS[t].isEulerPath=!1,void(MAIN_GRAPHS[t].AllEulerTours=[]);var r=getOddDegVertex(e);if(r.length>2||1==r.length)return console.log("Graph is not Eulerian"),MAIN_GRAPHS[t].isEulerian=!1,MAIN_GRAPHS[t].isEulerPath=!1,void(MAIN_GRAPHS[t].AllEulerTours=[]);var n;if(2==r.length){var s=r[0],i=r[1];n=s.degree<i.degree?s:i,allEulerPathesList=[],(subPath=[]).push(n),findEulerPaths(n),validateEulerTour(allEulerPathesList,MAIN_GRAPHS[t].allEdges.length),reversePaths(allEulerPathesList),MAIN_GRAPHS[t].isEulerian=!0,MAIN_GRAPHS[t].isEulerPath=!0,MAIN_GRAPHS[t].AllEulerTours=$.extend(!0,[],allEulerPathesList)}else{var l=null;n=e.verts[0];for(a=0;a<MAIN_GRAPHS[t].allNodes.length;a++)if(MAIN_GRAPHS[t].allNodes[a].id==FROM_NODE_ID){l=MAIN_GRAPHS[t].allNodes[a].name;break}if(null!=l)for(var a=0;a<e.verts.length;a++)if(e.verts[a].name==l){n=e.verts[a];break}allEulerPathesList=[],(subPath=[]).push(n),findEulerPaths(n),validateEulerTour(allEulerPathesList,MAIN_GRAPHS[t].allEdges.length),MAIN_GRAPHS[t].isEulerian=!0,MAIN_GRAPHS[t].isEulerPath=!0,MAIN_GRAPHS[t].AllEulerTours=$.extend(!0,[],allEulerPathesList)}}function reversePaths(e){for(var t=e.length,r=0;r<t;r++){var n=$.extend(!0,[],e[r]);n.reverse(),e.push(n)}}function findEulerPaths(e){for(var t=!0,r=0;r<e.Adj.length;r++){var n=e.Adj[r];if(0==n.seen){n.seen=!0;var s=n.otherEnd(e);subPath.push(s),findEulerPaths(s),n.seen=!1,subPath.pop(),t=!1}}if(r==e.Adj.length&&t){for(var i=[],l=0;l<subPath.length;l++)i.push(subPath[l].name);allEulerPathesList.push(i)}}function prepareToPrint(e,t,r,n){MAIN_GRAPHS[e].isEulerian=!0,MAIN_GRAPHS[e].isEulerPath=!n,MAIN_GRAPHS[e].AllEulerTours=[];var s=[];s.push(t);for(var i=t,l=0;l<r.length;l++){var a=r[l].otherEnd(i);s.push(a),i=a}MAIN_GRAPHS[e].AllEulerTours.push(s)}function isConnected(e){var t=e.verts[1];if(void 0===t)return!1;BFS(t);for(var r=0;r<e.verts.length;r++)if(!e.verts[r].seen)return!1;return!0}function BFS(t){var r=[];for(r.push(t);0!=r.length;){var n=r.shift();n.seen=!0;for(e in n.Adj){var s=n.Adj[e].otherEnd(n);s.seen||r.push(s)}}}function getOddDegVertex(e){for(var t=[],r=0;r<e.verts.length;r++){var n=e.verts[r];n.degree%2!=0&&t.push(n)}return t}function findEulerTour(e){for(var t=[],r=[],n=e.getUnvisitedEdge(),s=e;null!=n;)n.seen=!0,t.unshift(n),n=(s=n.otherEnd(s)).getUnvisitedEdge();for(;0!=t.length;){n=t.shift(),r.push(n);var i=(s=n.From).getUnvisitedEdge();for(null==i&&(i=(s=n.To).getUnvisitedEdge()),n=i;null!=n;)n.seen=!0,t.unshift(n),n=(s=n.otherEnd(s)).getUnvisitedEdge()}return r.reverse(),r}function verifyTour(t,r,n){if(r.length!=t.numEdges)return!1;t.initialize();var s=0;for(e in r){if(r[e].From.name!=n.name&&r[e].To.name!=n.name||r[e].seen)break;s++,n=r[e].otherEnd(n),r[e].seen=!0}return s==t.numEdges}function validateEulerTour(e,t){for(var r=0;r<e.length;r++)e[r].length!=t+1&&e.splice(r--,1)}function TestForEuler(e){var t=MAIN_GRAPHS[e].allNodes.length,r=MAIN_GRAPHS[e].allEdges.length,n=$.extend(!0,{},E_Graph);n.createEulerGraph(t);for(s=0;s<MAIN_GRAPHS[e].allNodes.length;s++)n.addVertix(MAIN_GRAPHS[e].allNodes[s].name);for(var s=0;s<r;s++){var i=MAIN_GRAPHS[e].allEdges[s].source,l=getNodeOfId(e,i).name,a=MAIN_GRAPHS[e].allEdges[s].target,h=getNodeOfId(e,a).name,o=MAIN_GRAPHS[e].allEdges[s].weight;n.addEdge(l,h,o)}printEuler(n,e)}function TestForHamilton(e){var t=MAIN_GRAPHS[e].allNodes.length,r=MAIN_GRAPHS[e].allEdges.length,n=$.extend(!0,{},E_Graph);n.createEulerGraph(t);for(s=0;s<MAIN_GRAPHS[e].allNodes.length;s++)n.addVertix(MAIN_GRAPHS[e].allNodes[s].name);for(var s=0;s<r;s++){var i=MAIN_GRAPHS[e].allEdges[s].source,l=getNodeOfId(e,i).name,a=MAIN_GRAPHS[e].allEdges[s].target,h=getNodeOfId(e,a).name,o=MAIN_GRAPHS[e].allEdges[s].weight;n.addEdge(l,h,o)}findHamilton(n,e)}function findHamilton(e,t){if(!isConnected(e))return console.log("Graph is not Hamiltonian"),MAIN_GRAPHS[t].isHamiltonian=!1,MAIN_GRAPHS[t].AllHamiltonPaths=[],void(MAIN_GRAPHS[t].AllHamiltonTours=[]);for(var r,n=0;n<e.verts.length;n++)e.initializeNodes(),r=e.verts[n],allHamiltonPathesList=[],allHamiltonCyclesList=[],subPath=[],findHamiltonPathsCycles(r,e.verts.length),MAIN_GRAPHS[t].AllHamiltonPaths=MAIN_GRAPHS[t].AllHamiltonPaths.concat(allHamiltonPathesList),MAIN_GRAPHS[t].AllHamiltonTours=MAIN_GRAPHS[t].AllHamiltonTours.concat(allHamiltonCyclesList);MAIN_GRAPHS[t].AllHamiltonPaths.length>0||MAIN_GRAPHS[t].AllHamiltonTours.length>0?MAIN_GRAPHS[t].isHamiltonian=!0:MAIN_GRAPHS[t].isHamiltonian=!1}function findHamiltonPathsCycles(e,t){subPath.push(e),e.seen=!0;for(var r=!0,n=0;n<e.Adj.length;n++)0==(h=(a=e.Adj[n]).otherEnd(e)).seen&&(findHamiltonPathsCycles(h,t),h.seen=!1,subPath.pop(),r=!1);if(r&&subPath.length==t){for(var s=[],i=0;i<subPath.length;i++)s.push(subPath[i].name);allHamiltonPathesList.push(s);for(var l=0;l<e.Adj.length;l++){var a=e.Adj[l],h=a.otherEnd(e);if(h==subPath[0]){var o=$.extend(!0,[],s);o.push(subPath[0].name),allHamiltonCyclesList.push(o);break}}}}var E_Edge=new function(){this.From,this.To,this.Weight,this.seen=!1,this.createEulerEdge=function(e,t,r){this.From=e,this.To=t,this.Weight=r,this.seen=!1},this.otherEnd=function(e){return this.From==e?this.To:this.From},this.toString=function(){return"("+this.From+","+this.To+")"}},E_Vertex=new function(){this.name,this.seen,this.parent,this.distance,this.Adj=[],this.degree,this.createEulerVertex=function(e){this.name=e,this.seen=!1,this.Adj=[],this.parent=null,this.degree=0},this.getUnvisitedEdge=function(){for(var e=0;e<this.Adj.length;e++){var t=this.Adj[e];if(0==t.seen)return t}return null},this.hasUnvisitedEdge=function(){for(var e=0;e<this.Adj.length;e++)if(0==this.Adj[e].seen)return!0;return!1},this.toString=function(){return this.name}},E_Graph=new function(){this.verts=[],this.numNodes,this.numEdges,this.createEulerGraph=function(e){this.numNodes=e,this.numEdges=0,this.verts=[]},this.addVertix=function(e){var t=$.extend(!0,{},E_Vertex);t.createEulerVertex(e),this.verts.push(t)},this.addEdge=function(e,t,r){var n=this.getVertixFromList(e);null==n&&((n=$.extend(!0,{},E_Vertex)).createEulerVertex(e),this.verts.push(n));var s=this.getVertixFromList(t);null==s&&((s=$.extend(!0,{},E_Vertex)).createEulerVertex(t),this.verts.push(s));var i=$.extend(!0,{},E_Edge);i.createEulerEdge(n,s,r),n.Adj.push(i),s.Adj.push(i),this.numEdges++,n.degree++,s.degree++},this.getVertixFromList=function(e){for(var t=0;t<this.verts.length;t++)if(this.verts[t].name==e)return this.verts[t];return null},this.initialize=function(){for(var e=0;e<this.verts.length;e++)for(var t=this.verts[e],r=0;r<t.Adj.length;r++)t.Adj[r].seen=!1},this.initializeNodes=function(){for(var e=0;e<this.verts.length;e++)this.verts[e].seen=!1}},allEulerPathesList=[],subPath=[],allHamiltonPathesList=[],allHamiltonCyclesList=[];