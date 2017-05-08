## Data-Interaction-II-Making-charts(Word Cloud)
A **chart** is a graphical representation of data. It is also known as graph. People use chart to show large quantities of data and the relationships between parts of the data. Map makers will use chart to help their audiences to understand the content when maps contain a large amount of informaiton. But, of course, you can use a chart whenever you want. **Remember**! Charts help your audiences to understand your material easily, not create confusion. **Word Cloud** is an useful tool to make your chart.

**Word Cloud:**
Word cloud is a visual representation of text data. It is also known as tag cloud or weighted list. This technique depicts keyword metadata on website or to visualize free from text. Usually, people use **inline HTML elements** to make word cloud. People rank texts by alphabetical order, or in a random order. To create a word cloud, selective texts are weigthed by frequency. To visual word cloud, people manipulate the texts by using different font size, color and shapes of cluster.
![Example1](https://github.com/winkyt/Data-Interaction-II-Making-charts/blob/master/Img/Example1.png)

**Feature of Work Cloud**:
* Size: Large size represent a more important content and is more attractive to audience. Content properties, such as number of characters, position and neighboring tag, influence the effect. 
* Scanning: Audience tend to scan the chart than read through all materials. 
* Centering: placing the most important feature/content at the center area. It helps attract to your audiences
* Position: At the western culture, people start to read from the upper left side. 
* Exploration: When audiences look for a specific content, work cloud provide suboptimal support. 

**API Reference** 
The following informaiton are from Jaosn Davies Github document.
* #d3.layout.cloud(): Constructs a new cloud layout instance.

* #on(type, listener):Registers the specified listener to receive events of the specified type from the layout. Currently, only "word" and "end" events are supported. A "word" event is dispatched every time a word is successfully placed. Registered listeners are called with a single argument: the word object that has been placed. An "end" event is dispatched when the layout has finished attempting to place all words. Registered listeners are called with two arguments: an array of the word objects that were successfully placed, and a bounds object of the form [{x0, y0}, {x1, y1}] representing the extent of the placed objects.

* #start(): Starts the layout algorithm. This initialises various attributes on the word objects, and attempts to place each word, starting with the largest word. Starting with the centre of the rectangular area, each word is tested for collisions with all previously-placed words. If a collision is found, it tries to place the word in a new position along the spiral.
 Note: if a word cannot be placed in any of the positions attempted along the spiral, it is not included in the final word layout. This may be addressed in a future release.

* #stop():Stops the layout algorithm.

* #timeInterval([time]):Internally, the layout uses setInterval to avoid locking up the browser’s event loop. If specified, time is the maximum amount of time that can be spent during the current timestep. If not specified, returns the current maximum time interval, which defaults to Infinity.

* #words([words]):If specified, sets the words array. If not specified, returns the current words array, which defaults to [].

* #size([size]):If specified, sets the rectangular [width, height] of the layout. If not specified, returns the current size, which defaults to [1, 1].

* #font([font]):If specified, sets the font accessor function, which indicates the font face for each word. If not specified, returns the current font accessor function, which defaults to "serif". A constant may be specified instead of a function.

* #fontStyle([fontStyle]):If specified, sets the fontStyle accessor function, which indicates the font style for each word. If not specified, returns the current fontStyle accessor function, which defaults to "normal". A constant may be specified instead of a function.

* #fontWeight([fontWeight]):If specified, sets the fontWeight accessor function, which indicates the font weight for each word. If not specified, returns the current fontWeight accessor function, which defaults to "normal". A constant may be specified instead of a function.

* #fontSize([fontSize]):If specified, sets the fontSize accessor function, which indicates the numerical font size for each word. If not specified, returns the current fontSize accessor function.

* #rotate([rotate]):If specified, sets the rotate accessor function, which indicates the rotation angle (in degrees) for each word. If not specified, returns the current rotate accessor function. 

* #text([text]):If specified, sets the text accessor function, which indicates the text for each word. If not specified, returns the current text accessor function.

* #spiral([spiral]): If specified, sets the current type of spiral used for positioning words. This can either be one of the two built-in spirals, "archimedean" and "rectangular", or an arbitrary spiral generator can be used.If not specified, returns the current spiral generator, which defaults to the built-in "archimedean" spiral.

* #padding([padding]):If specified, sets the padding accessor function, which indicates the numerical padding for each word. If not specified, returns the current padding, which defaults to 1.

* #random([random]):If specified, sets the internal random number generator, used for selecting the initial position of each word, and the clockwise/counterclockwise direction of the spiral for each word. This should return a number in the range [0, 1).If not specified, returns the current random number generator, which defaults to Math.random.

* #canvas([canvas]):If specified, sets the canvas generator function, which is used internally to draw text. If not specified, returns the current generator function.

**Code your data**
``` javascript
	var frequency_list = [{"text":"study","size":40},{"text":"motion","size":15}];
```
![Hardcode example](https://github.com/winkyt/Data-Interaction-II-Making-charts/blob/master/Img/Hardcode.png)

**Use a CSV file**
``` javascript
d3.csv('Example.csv', function (data) {
    var state = [];
    data.forEach(function(row){
        if (row.G > 0) state.push({text: row.Name, size: Number(row.G)});
    });

    var state = state.sort(function(a,b){
        return (a.size < b.size)? 1:(a.size == b.size)? 0:-1
    }).slice(0,50);

    var stateScale = d3.scale.linear()
        .range([10,60])
        .domain([d3.min(state,function(d) { return d.size; }),
                 d3.max(state,function(d) { return d.size; })
               ]);

    d3.layout.cloud().size([width, height])
        .words(state)
        .padding(0)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return stateScale(d.size); })
        .on("end", drawCloud)
        .start();
});

```
![d3.csv](https://github.com/winkyt/Data-Interaction-II-Making-charts/blob/master/Img/CSV.png)

**Use a .json file** 
Once you have a your dataset, you can use an online convert.

## Usage
See the samples in `Example/`. For CSV, go to example.js. For hardcode, go to example1.js

**Word Cloud Generator**
Link:https://www.jasondavies.com/wordcloud/

**CSV to JSON Convertion**
Link:http://www.convertcsv.com/csv-to-json.htm (A suggestion, not only option)

**Reference Link**
https://github.com/jasondavies/d3-cloud

https://en.wikipedia.org/wiki/Tag_cloud

http://static.mrfeinberg.com/bv_ch03.pdf
