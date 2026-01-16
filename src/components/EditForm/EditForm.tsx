import {
    Box,
    Button,
    Grid,
    MenuItem,
    TextField,
    Typography
} from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {useForm} from 'react-hook-form';
import type {IPageForm} from '../../types';
import * as React from 'react';
import {useEffect} from 'react';
import {PAGES} from '../../сonstants.ts';

interface Props {
    initialValues?: IPageForm;
    onSubmit: (data: IPageForm) => void;
    onPageSelect: (pageName: string) => void;
    isLoading: boolean;
    selectedPage: string;
}

const EditForm: React.FC<Props> = ({
  onSubmit,
  onPageSelect,
  isLoading,
  selectedPage,
  initialValues
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<IPageForm>({
    defaultValues: {
      page: '',
      title: '',
      content: ''
    }
  });

  const watchedPage = watch('page');

  useEffect(() => {
    if (!initialValues) return;

    reset({
      page: selectedPage,
      title: initialValues.title,
      content: initialValues.content
    });
  }, [initialValues, selectedPage, reset]);

  useEffect(() => {
    if (!watchedPage) return;
    if (watchedPage === selectedPage) return;

    onPageSelect(watchedPage);
  }, [watchedPage, selectedPage, onPageSelect]);

  return (
    <Box sx={{ mt: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" align="center">
          Edit Form
        </Typography>

        <Grid container spacing={2} sx={{ width: '70%', mx: 'auto', mt: 4 }}>
          <Grid size={12}>
            <TextField
              select
              fullWidth
              label="Page name"
              {...register('page', { required: 'Choose page!' })}
              error={!!errors.page}
              helperText={errors.page?.message}
              disabled={isLoading}
            >
              {PAGES.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={12}>
            <TextField
              label="Page title"
              fullWidth
              {...register('title', {
                required: 'Required field!',
                minLength: { value: 3, message: 'Min 3 chars' }
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
              disabled={isLoading}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Page content"
              multiline
              minRows={3}
              fullWidth
              {...register('content')}
              disabled={isLoading}
            />
          </Grid>

          <Grid size={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SaveAsIcon />}
              disabled={isLoading}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditForm;