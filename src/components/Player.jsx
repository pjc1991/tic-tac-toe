import {useState} from 'react';

export default function Player({name, symbol, onEdit}) {

    const [editing, setEditing] = useState(false);

    if (editing) {
        name = (<input
                className="border-2 border-orange-600 bg-black text-white rounded-lg px-2 py-1"
                autoFocus
                type="text"
                value={name}
                onChange={(e) => onEdit(e.target.value)}
            />)

    }

    function handleEdit() {
        setEditing(() => !editing);

    }

    return (<li>
                            <span className="text-white font-bold mr-2">
                                {name}
                            </span>
                            <span className="text-orange-600">
                                {symbol}
                            </span>
            <button
                className="bg-black border-orange-600 border-2 text-white rounded-lg px-2 py-1 ml-2 hover:bg-orange-600"
                onClick={() => handleEdit()}>
                {editing ? 'Save' : 'Edit'}
            </button>
        </li>)
}