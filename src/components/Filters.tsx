
import './Filters.css';
import { useExtensionActions } from "../store/store";
import useStore from '../store/store';

const FILTERS = [
    { type: 'all', label: 'All' },
    { type: 'active', label: 'Active' },
    { type: 'inactive', label: 'Inactive' }
] as const;

export default function Filters() {
    const { setFilter } = useExtensionActions();
    const filter = useStore((state) => state.filter);

    return (
        <div className="filters">
            {FILTERS.map(f => (
                <button
                    key={f.type}
                    className={`button ${filter === f.type ? 'filters__button--active' : 'button--secondary'}`}
                    onClick={() => setFilter(f.type)}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}
