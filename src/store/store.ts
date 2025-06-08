import { create } from 'zustand'
import data from '../data.json';

export interface ExtentionItem {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}

export type FilterType = 'all' | 'active' | 'inactive';

interface StoreState {
    extensions: ExtentionItem[];
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
    addExtension: (extension: ExtentionItem) => void;
    removeExtension: (name: string) => void;
    toggleExtension: (name: string) => void;
}

const useStore = create<StoreState>((set) => ({
    extensions: data as ExtentionItem[],
    filter: 'all',
    setFilter: (filter) => set({ filter }),
    addExtension: (extension) => set((state) => ({
        extensions: [...state.extensions, extension]
    })),
    removeExtension: (name) => set((state) => ({
        extensions: state.extensions.filter(ext => ext.name !== name)
    })),
    toggleExtension: (name) => set((state) => ({
        extensions: state.extensions.map(ext =>
            ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
        )
    }))
}));

export const useFilteredExtensions = () => {
    const extensions = useStore((state) => state.extensions);
    const filter = useStore((state) => state.filter);

    switch (filter) {
        case 'active':
            return extensions.filter(ext => ext.isActive);
        case 'inactive':
            return extensions.filter(ext => !ext.isActive);
        default:
            return extensions;
    }
};

export const useExtensionActions = () => {
    const setFilter = useStore((state) => state.setFilter);
    const addExtension = useStore((state) => state.addExtension);
    const removeExtension = useStore((state) => state.removeExtension);
    const toggleExtension = useStore((state) => state.toggleExtension);

    return {
        setFilter,
        addExtension,
        removeExtension,
        toggleExtension
    };
};

export default useStore;
