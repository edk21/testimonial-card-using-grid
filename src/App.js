import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <div className="one">
      <div className="one-header">
        {/* <BiFace/> */}
        <img src="/images/image-daniel.jpg" alt=""/>
        <div className="onheader-text">
        <h3>Daniel</h3>
        <p>Design Director</p>
        </div>
      </div>
      <div className="one-body">
        <h3>That’ll create a grid that’s four columns wide by three rows tall. The entire top row will be composed of the header area. The middle row will be composed of two </h3>
      </div>
      <div className="one-footer">
        <p>Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.</p>
      </div>
     </div>

     <div className="two">
     <div className="two-header">
        <img src="/images/image-jeanette.jpg" alt=""/>
        <div className="twoheader-text">
        <h3>Jeanette</h3>
        <p>Design Director</p>
        </div>
      </div>
      <div className="two-body">
        <h3>The entire top row will be composed of the header area. The middle row will be composed of two </h3>
      </div>
      <div className="two-footer">
        <p>A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.</p>
      </div>
     </div>

     <div className="three">
     <div className="three-header">
        <img src="/images/image-jonathan.jpg" alt=""/>
        <div className="threeheader-text">
        <h3>Jonathan</h3>
        <p>Design Director</p>
        </div>
      </div>
      <div className="three-body">
        <h3>A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.</h3>
      </div>
      <div className="three-footer">
      <p>Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is foo, the name of the area’s starting row line and starting column line will be foo-start, and the name of its last row line and last column line will be foo-end. This means that some lines might have multiple names, such as the far left line in the above example, which will have three names: header-start,
      A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid. </p>

      </div>
     </div>
     <div className="four">
     <div className="four-header">
        <img src="/images/image-kira.jpg" alt=""/>
        <div className="fourheader-text">
        <h3>Kira</h3>
        <p>Design Director</p>
        </div>
      </div>
      <div className="four-body">
        <h3>The middle row will be composed of two </h3>
      </div>
      <div className="four-footer">
        <p>A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.</p>
      </div>
     </div>
     <div className="five">
     <div className="five-header">
        <img src="/images/image-patrick.jpg" alt=""/>
        <div className="fiveheader-text">
        <h3>Patrick</h3>
        <p>Design Director</p>
        </div>
      </div>
      <div className="five-body">
        <h3>The entire top row will be composed of the header area. The middle row will be composed of two </h3>
      </div>
      <div className="five-footer">
        <p>A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid. The entire top row will be composed of the header area. The middle row will be composed of two, The entire top row will be composed of the header area. The middle row will be composed of two</p>
      </div>
     </div>
    </div>
  );
}
