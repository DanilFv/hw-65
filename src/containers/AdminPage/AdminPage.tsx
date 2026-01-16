import EditForm from '../../components/EditForm/EditForm.tsx';
import {useCallback, useEffect, useState} from 'react';
import type {IPageForm} from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';

const AdminPage = () => {
    const [page, setPage] = useState<IPageForm | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedPageName, setSelectedPageName] = useState<string>('');
    const navigate = useNavigate();


    const fetchPageContent = useCallback(async (pageName: string) => {
        setLoading(true);
        try {
            const response = await axiosAPI.get<IPageForm>(`pages/${pageName}.json`);
            const pageInfo = response.data;

            if (pageInfo) setPage(pageInfo);

        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (selectedPageName) {
            void fetchPageContent(selectedPageName);
        }
    }, [selectedPageName, fetchPageContent]);

    const savePageInfo = async (formData: IPageForm) => {
        setLoading(true);
        try {
            const updateData = {
                title: formData.title,
                content: formData.content
            };
            await axiosAPI.put(`pages/${formData.page}.json`, updateData);
            toast.success('Page updated!');
            navigate(`/pages/${formData.page}`);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {loading && <Spinner />}
            <EditForm onSubmit={savePageInfo} onPageSelect={setSelectedPageName} isLoading={loading} selectedPage={selectedPageName} initialValues={page || undefined} />

        </>

    );
};

export default AdminPage;