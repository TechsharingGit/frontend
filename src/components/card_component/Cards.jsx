import './Cards.css';
const iconPath = process.env.PUBLIC_URL + '/assets/images/';

function Cards() {
  return (
    <section className="row_full featureBox pad_t_b_35">
        <div className="container">
            <div className="row_full">
                <h3>Feature Section</h3>
                <div className="col-4 float_l">
                    <div className="row_full">
                        <div className="row_full testImg">
                            <img src={`${iconPath}slider_1.jpg`}/>
                            <span className="row_full nameElm">Gyansutrm</span>
                        </div>
                        <div class="row_full testmText txt-cen">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 float_l">
                    <div className="row_full">
                        <div className="row_full testImg">
                            <img src={`${iconPath}slider_1.jpg`}/>
                            <span className="row_full nameElm">Gyansutrm</span>
                        </div>
                        <div class="row_full testmText txt-cen">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 float_l">
                    <div className="row_full">
                        <div className="row_full testImg">
                            <img src={`${iconPath}slider_1.jpg`}/>
                            <span className="row_full nameElm">Gyansutrm</span>
                        </div>
                        <div class="row_full testmText txt-cen">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Cards;