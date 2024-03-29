import React from 'react'

class FormularioTarea extends React.Component{

    constructor(){
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'bajo'
        };
        this.handleInput = this.handleInput.bind(this); // llama a la funcion handleInput y lo vincula con el estado
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTarea(this.state);
        console.log('enviando los datos..');
    }

    render(){
        return(
            <div className="card form">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" 
                            name="titulo"
                            onChange={this.handleInput}
                            className="form-control" 
                            placeholder="titulo"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            name="responsable" 
                            onChange={this.handleInput}
                            className="form-control" 
                            placeholder="responsable"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            name="descripcion" 
                            className="form-control"
                            onChange={this.handleInput}
                            placeholder="descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <select name="prioridad" className="form-control" onChange={this.handleInput}>
                            <option>bajo</option>
                            <option>medio</option>
                            <option>alto</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default FormularioTarea;