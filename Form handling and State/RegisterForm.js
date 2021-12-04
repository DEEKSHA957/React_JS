import React, {Component} from 'react';

 class RegisterForm extends Component {
    render() { 
        return(
            <div className="container">
                <div className="row justify-content-between pt-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 m-auto">
                        <form>
                          <center>
                            <div className="card shadow">
                                <div className="card-header pt-3">
                                    <h5 className="card-title">Get in touch with us</h5>
                                </div>

                                <div className="card-body px-4 py-4">
                                    <div className="form-group py-2">
                                        <input type="text" name="name" placeholder="Name" className="form-control"/>
                                    </div>

                                    <div className="form-group py-2">
                                        <input type="email" name="email" placeholder="Email" className="form-control"/>
                                    </div>

                                    <div className="form-group py-2">
                                        <input type="password" name="email" placeholder="Password" className="form-control"/>
                                    </div>

                                    <div className="form-group py-2">
                                        <input type="text" maxlength="10" name="phone" placeholder="Phone number" className="form-control"/>
                                    </div>

                                    <div className="row">
                                        <div className="form-group py-2">
                                            <div className="col-xl-8">
                                                <input type="radio" value="Male" name="gender" className="mx-2" /> Male
                                                <input type="radio" value="Female" name="gender" className="mx-2"/> Female
                                                <input type="radio" value="Other" name="gender" className="mx-2" /> Other
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group py-2">
                                        <input type="date" name="dob" className="form-control"/>
                                    </div>

                                    <div className="form-group py-2">
                                        <select defaultValue="" name="city" className="form-control">
                                            <option disabled value="">City</option>
                                            <option value="ranchi">Ranchi</option>
                                            <option value="new delhi">New Delhi</option>
                                            <option value="gurgaon">Gurgaon</option>
                                            <option value="hyderabad">Hyderabad</option>
                                        </select>
                                    </div>

                                    <div className="form-group py-2">
                                        <textarea placeholder="About You" name="about" className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className="card-footer px-4">
                                    <button type="submit" className="btn btn-success">Send</button>
                                </div>
                            </div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default RegisterForm;