// STYLES CAN BE FOUND IN SKILLS.SCSS


import { useState, useEffect } from "react";
import '../Pages/Skills.scss'

function FetchData(){
    const URL = "https://api.github.com/users/wallmandev/repos";

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Något gick fel vid hämtning av data');
            }
            return resp.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => {
            setError(error);
        });
    }, []);

    if (error) {
        return <div>Fel vid hämtning av data: {error.message}</div>;
    }

    return(
        <div className="skills">
            <section className="skills-container">
            <h1 className="skills-header">Mina Projekt</h1>
                {data.map((repo) => (
                    <article key={repo.id}>
                        <a className="skills-links" href={repo.html_url}>
                            <h2>{repo.name}</h2>
                        </a>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default FetchData;

// STYLES CAN BE FOUND IN SKILLS.SCSS
