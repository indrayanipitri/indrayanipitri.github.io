import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class coba extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Link to="#LoginModal">
                    <button type="button" data-toggle="modal" class="btn-primary text-center"> Coba</button>
                    </Link>
                </div>

                <div className="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        
                            <div className="modal-body">
                                kjadbjksahfbusaf
                               
                    </div>
                    
                    </div>
                </div>
                </div>

</React.Fragment>
        );
    }
}

export default coba;