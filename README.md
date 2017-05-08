## Data-Interaction-II-Making-charts(Word Cloud)
A **chart** is a graphical representation of data. It is also known as graph. People use chart to show large quantitiels of data and the relationships between parts of the data. Map makers will use chart to help their audiences to understand the content when maps contain a large amount of informaiton. But, of course, you can use a chart whenever you want. **Remember**! Charts help your audiences to understand your material easily, not create confusion. 

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
	var frequency_list = [{"text":"study","size":40},{"text":"motion","size":15},{"text":"forces","size":10},{"text":"electricity","size":15},{"text":"movement","size":10},{"text":"relation","size":5},{"text":"things","size":10},{"text":"force","size":5},{"text":"ad","size":5},{"text":"energy","size":85},{"text":"living","size":5},{"text":"nonliving","size":5},{"text":"laws","size":15},{"text":"speed","size":45},{"text":"velocity","size":30},{"text":"define","size":5},{"text":"constraints","size":5},{"text":"universe","size":10},{"text":"physics","size":120},{"text":"describing","size":5},{"text":"matter","size":90},{"text":"physics-the","size":5},{"text":"world","size":10},{"text":"works","size":10},{"text":"science","size":70},{"text":"interactions","size":30},{"text":"studies","size":5},{"text":"properties","size":45},{"text":"nature","size":40},{"text":"branch","size":30},{"text":"concerned","size":25},{"text":"source","size":40},{"text":"google","size":10},{"text":"defintions","size":5},{"text":"two","size":15},{"text":"grouped","size":15},{"text":"traditional","size":15},{"text":"fields","size":15},{"text":"acoustics","size":15},{"text":"optics","size":15},{"text":"mechanics","size":20},{"text":"thermodynamics","size":15},{"text":"electromagnetism","size":15},{"text":"modern","size":15},{"text":"extensions","size":15},{"text":"thefreedictionary","size":15},{"text":"interaction","size":15},{"text":"org","size":25},{"text":"answers","size":5},{"text":"natural","size":15},{"text":"objects","size":5},{"text":"treats","size":10},{"text":"acting","size":5},{"text":"department","size":5},{"text":"gravitation","size":5},{"text":"heat","size":10},{"text":"light","size":10},{"text":"magnetism","size":10},{"text":"modify","size":5},{"text":"general","size":10},{"text":"bodies","size":5},{"text":"philosophy","size":5},{"text":"brainyquote","size":5},{"text":"words","size":5},{"text":"ph","size":5},{"text":"html","size":5},{"text":"lrl","size":5},{"text":"zgzmeylfwuy","size":5},{"text":"subject","size":5},{"text":"distinguished","size":5},{"text":"chemistry","size":5},{"text":"biology","size":5},{"text":"includes","size":5},{"text":"radiation","size":5},{"text":"sound","size":5},{"text":"structure","size":5},{"text":"atoms","size":5},{"text":"including","size":10},{"text":"atomic","size":10},{"text":"nuclear","size":10},{"text":"cryogenics","size":10},{"text":"solid-state","size":10},{"text":"particle","size":10},{"text":"plasma","size":10},{"text":"deals","size":5},{"text":"merriam-webster","size":5},{"text":"dictionary","size":10},{"text":"analysis","size":5},{"text":"conducted","size":5},{"text":"order","size":5},{"text":"understand","size":5},{"text":"behaves","size":5},{"text":"en","size":5},{"text":"wikipedia","size":5},{"text":"wiki","size":5},{"text":"physics-","size":5},{"text":"physical","size":5},{"text":"behaviour","size":5},{"text":"collinsdictionary","size":5},{"text":"english","size":5},{"text":"time","size":35},{"text":"distance","size":35},{"text":"wheels","size":5},{"text":"revelations","size":5},{"text":"minute","size":5},{"text":"acceleration","size":20},{"text":"torque","size":5},{"text":"wheel","size":5},{"text":"rotations","size":5},{"text":"resistance","size":5},{"text":"momentum","size":5},{"text":"measure","size":10},{"text":"direction","size":10},{"text":"car","size":5},{"text":"add","size":5},{"text":"traveled","size":5},{"text":"weight","size":5},{"text":"electrical","size":5},{"text":"power","size":5}];
```

**Input a CSV file**
``` javascript
d3.csv('Example.csv', function (data) {
    var leaders = [];
    data.forEach(function(row){
        if (row.G > 0) leaders.push({text: row.Name, size: Number(row.G)});
    });

    var leaders = leaders.sort(function(a,b){
        return (a.size < b.size)? 1:(a.size == b.size)? 0:-1
    }).slice(0,50);

    var leaderScale = d3.scale.linear()
        .range([10,60])
        .domain([d3.min(leaders,function(d) { return d.size; }),
                 d3.max(leaders,function(d) { return d.size; })
               ]);

    d3.layout.cloud().size([width, height])
        .words(leaders)
        .padding(0)
        //.rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return leaderScale(d.size); })
        .on("end", drawCloud)
        .start();
});
```
**Word Cloud Generator**
Link:https://www.jasondavies.com/wordcloud/

Link:https://github.com/jasondavies/d3-cloud

https://en.wikipedia.org/wiki/Tag_cloud

http://static.mrfeinberg.com/bv_ch03.pdf
