import React, { Component } from 'react';
import './crud.css'

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedIndex: -1
        }
    }
    render() {
        const addProduct = (event) => {
            event.preventDefault();
            let productNama = event.target.name.value;
            let productSur = event.target.sur.value;
            let productDate = event.target.date.value;
            let productSelect = event.target.select.value;

            event.target.reset();

            let newProduct = {
                name: productNama,
                sur: productSur,
                date: productDate,
                select: productSelect

            }
            
            if(this.state.selectedIndex>=0){
                this.state.products[this.state.selectedIndex] = newProduct;
                this.state.selectedIndex=-1;
            }else{
                this.state.products.push(newProduct);
            }
            this.setState({
                products: this.state.products
            })

        }

        const delet = (index) => {
            this.state.products.splice(index, 1);

            this.setState({
                products: this.state.products
            })
        }

        const edit = (index) => {
            this.setState({
                selectedIndex: index
            })
        }
        return (
            <div className='body'>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3>
                                        Malumot Kriting
                                    </h3>
                                </div>
                                <form onSubmit={addProduct}>
                                    <div className="card-body">
                                        <input type="text"
                                            placeholder='Username'
                                            name='name'
                                            className='form-control mt-3'
                                            defaultValue={this.state.products[this.state.selectedIndex]?.name}
                                        />
                                        <input type="text"
                                            placeholder='Surname'
                                            name='sur'
                                            className='form-control mt-3'
                                            defaultValue={this.state.products[this.state.selectedIndex]?.sur}
                                        />
                                        <input type="date"
                                            className='form-control mt-3'
                                            name='date'
                                            defaultValue={this.state.products[this.state.selectedIndex]?.date}
                                        />
                                        <select name="select" className='form-control mt-3' defaultValue={this.state.products[this.state.selectedIndex]?.select}>
                                            <option value="kantrakt">
                                                Kontrakt
                                            </option>
                                            <option value="grant">
                                                Grand
                                            </option>
                                        </select>
                                        <button type='submit' className='btn d-block ml-auto btn-primary mt-3'>
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-9 mt-5">
                            <div className="card">
                                <div className="card-body bg-primary">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>№</th>
                                                <th>Ism Familya</th>
                                                <th>Tug'ilgan sana</th>
                                                <th>O'qish turi</th>
                                                <th>Amal</th>
                                            </tr>
                                        </thead>
                                        {
                                            this.state.products.map((item, index) => {
                                                return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{index+1}</td>
                                                                <td>{item.name} {item.sur}</td>
                                                                <td> {item.date}</td>
                                                                <td>{item.select}</td>
                                                                <td><button class="btn btn-success" onClick={() => edit(index)}>Edit</button></td>
                                                                <td><button class="btn btn-danger" onClick={() => delet(index)}>Delete</button></td>
                                                            </tr>
                                                        </tbody>
                                                )
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crud;