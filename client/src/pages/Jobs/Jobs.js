import React, { useState } from 'react';
import useFetchJobs from '../../components/UseFetchJobs/UseFetchJobs';
import { Container } from 'react-bootstrap';
import Layout from '../../layout/Layout';
import Job from '../../components/Job/Job';
import JobsPagination from '../../components/JobPagination/JobPagination';
import SearchForm from '../../components/SearchForm/SearchForm';
import './styles.css';

function Jobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Layout>
      <Container className="my-4">
        <h1 className="github-jobs">GitHub Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </Container>
    </Layout>
  );
}

export default Jobs;
