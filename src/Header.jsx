import React from "react";

const Header=()=>{
    return(
    <> 
  <div className="head p-4" >
 
  <div className="dropdown   me-3">
  <button className="  ham btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <span className="material-symbols-outlined">
menu
</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<img class="gb_Lc gb_Ld" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" ></img>
<h3>Keep</h3>
</div>
    </> );
}
export default Header;