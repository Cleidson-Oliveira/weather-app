import { Wrapper } from "./style";

import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from "react";

export default function Search ({ search }) {

    const [searchField, setSearchField] = useState('')

    return (
        <Wrapper>
            <input
                type="text"
                placeholder="Insira aqui o nome da cidade"
                value={searchField}
                onChange={e => setSearchField(e.target.value)}
            />
            <button onClick={() => {search(searchField)}}>
                <AiOutlineSearch />
            </button>
        </Wrapper>
    )
}