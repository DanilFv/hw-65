import {useCallback, useEffect, useState} from 'react';
import type {IPage} from '../../types';
import {useParams} from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import PageCard from '../../components/PageCard/PageCard.tsx';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';


const Page = () => {
    const [pageData, setPageData] = useState<IPage | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const params = useParams<{pageName: string}>();

    const fetchPage = useCallback(async (pageId: string) => {
        let url: string = 'pages.json';

        if (pageId) {
            url = `pages/${pageId}.json`;
        }

        try {
            setLoading(true);
            const response = await axiosAPI.get<IPage | null>(url);
            const page = response.data;

            if (page) setPageData(page);

        } finally {
            setLoading(false);
        }

    },[])

    useEffect(() => {
        if (params.pageName) {
            void fetchPage(params.pageName);
            console.log(params.pageName);
        }
    },[fetchPage, params.pageName]);


    return (
       <>
           {loading && <Spinner />}
           {pageData && <PageCard page={pageData} />}
       </>
    );
};

export default Page;