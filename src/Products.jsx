

export default function Products({ onAddToBag }) {

    return (
        <>
       <div className="bbb">
         <div className="our">
         <div className="our_text">
<div>
    <h1><span className="green">Our</span> Products</h1>
    <ul>
        <li><a href="#"><b>All</b></a></li>
        <li><a href="#">Bed</a></li>
        <li><a href="#">Chair</a></li>
        <li><a href="#">Light</a></li>
        <li><a href="#">Sofa</a></li>
    </ul>
</div>
<a id="seal" href="">See All     </a>
         </div>
         <div className="mebel">
    <div className="mebel_box">
        <div className="mebel_text">
     <div>
        <p>Chair</p>
        <h3>Glossy Cube</h3>
     </div>
     <img src="src/assets/Frame 39.png" alt="" />
        </div>
            <div className="mebel_img">
                <img src="src/assets/unnamed (5) 1.png" alt="" />
            </div>
            <div>
                <button onClick={onAddToBag}>Uzs 300.000</button>
            </div>
    </div>
    <div className="mebel_box">
        <div className="mebel_text">
     <div>
        <p>Chair</p>
        <h3>Wooden Side</h3>
     </div>
     <img src="src/assets/Frame 39.png" alt="" />
        </div>
            <div className="mebel_img">
                <img src="src/assets/unnamed (5) 2.png" alt="" />
            </div>
            <div>
                <button className="buty" onClick={onAddToBag}>Uzs 200.000</button>
            </div>
    </div>
    <div className="mebel_box">
        <div className="mebel_text">
     <div>
        <p>Chair</p>
        <h3>Upholstery Sotka</h3>
     </div>
     <img src="src/assets/Frame 39.png" alt="" />
        </div>
            <div className="mebel_img">
                <img src="src/assets/unnamed (5) 3.png" alt="" />
            </div>
            <div>
                <button className="buty" onClick={onAddToBag}>Uzs 700.000</button>
            </div>
    </div>
    <div className="mebel_box">
        <div className="mebel_text">
     <div>
        <p>Chair</p>
        <h3>Bed
Headboard</h3>
     </div>
     <img src="src/assets/Frame 39.png" alt="" />
        </div>
            <div className="mebel_img">
                <img src="src/assets/unnamed (5) 4.png" alt="" />
            </div>
            <div>
                <button className="buty" onClick={onAddToBag}>Uzs 900.000</button>
            </div>
    </div>
         </div>
        </div>
       </div>
        </>
    )
}