export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Default text'}</p>

            <a href={props.repository?.html_url ?? ''}>
                Acessar repositório
                    </a>
        </li>
    );
}