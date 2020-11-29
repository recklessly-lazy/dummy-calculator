import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-tabs/style/react-tabs.css";

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                transactionType: "",
                pran: "",
                ackNo: "",
                fromDate: "",
                toDate: "",
                approverId: "",
            },
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const { form } = this.state;
        this.setState({
            form: { ...form, [name]: value },
        });
    };

    render() {
        console.log(this.state.form.toDate);
        return (
            <div>
                <h1>Transaction</h1>
                <Tabs>
                    <TabList>
                        <Tab>Authorize Transaction</Tab>
                        <Tab>Update Subscriber Details</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="container mt-5">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <h3>Transaction Type</h3>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select
                                            className="form-control"
                                            id="transactionType"
                                            name="transactionType"
                                            onChange={this.handleChange}
                                        >
                                            <option value="0" selected disabled>
                                                Select
                                            </option>
                                            <option value="a">
                                                Subscriber Details Change
                                            </option>
                                            <option value="b">
                                                Subscriber pran
                                            </option>
                                            <option value="c">
                                                Subscriber{" "}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <h3>PRAN</h3>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pran"
                                            value={this.state.pran}
                                            onChange={this.handleChange}
                                            id="pran"
                                            placeholder="PRAN Id"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <h3>Acknowledgement Number/PRN</h3>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="ackNo"
                                            value={this.state.ackNo}
                                            onChange={this.handleChange}
                                            id="AckNo/PRN"
                                            placeholder="ackNo"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <h3>From Date</h3>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="fromDate"
                                            value={this.state.fromDate}
                                            onChange={this.handleChange}
                                            id="fromDate"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <h3>To Date</h3>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="toDate"
                                            value={this.state.toDate}
                                            onChange={this.handleChange}
                                            id="toDate"
                                        />
                                    </div>
                                </div>

                                <div className="form-row mt-2">
                                    <div className="form-group col-md-6">
                                        <h3>Approver Id</h3>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="approverId"
                                            value={this.state.approverId}
                                            onChange={this.handleChange}
                                            id="approverId"
                                        />
                                    </div>
                                </div>

                                <div className="form-row mt-2">
                                    <div className="form-group col-md-3 offset-6">
                                        <button className="btn btn-outline-primary btn-block">
                                            Search
                                        </button>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <button className="btn btn-outline-dark btn-block">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="container">
                            <h2>Update Subscriber Details forms</h2>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Transaction;
