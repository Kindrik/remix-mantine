import NewNote, { links as NewNoteLinks} from '../components/NewNote';
import newNoteStyles from '../components/NewNote.css';

export default function NotesPage(){
    return (
        <main>
            <NewNote />
        </main>
    )
}

export function links() {
    return [...NewNoteLinks()];
}