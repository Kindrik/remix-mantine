import { redirect } from '@remix-run/node';
import NewNote, { links as NewNoteLinks} from '../components/NewNote';
import NoteList, { links as NoteListLinks } from '~/components/NoteList';
import newNoteStyles from '../components/NewNote.css';
import { getStoredNotes, storedNotes } from '../data/notes';

export default function NotesPage(){
    return (
        <main>
            <NewNote />
            <NoteList />
        </main>
    )
}

export function loader() {
    
}

export async function action({request}){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storedNotes(updatedNotes);
    return redirect('/notes')
}

export function links() {
    return [...NewNoteLinks(), ...NoteListLinks()];
}