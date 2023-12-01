'use client';
import {
    React,
    useState,
    useRouter,
    updateTagAction,
    useToast,
    AiOutlineEdit,
    ToastAction,
    Button,
} from './export';
// TODO  update data of post when udpate done and debounse bouttn or disable button
const EditTagForm = ({ id, title }) => {
    const oldTitle = title;
    const [newTitle, setNewTitle] = useState(title);
    const router = useRouter();
    const { toast } = useToast();

    function action(data) {
        const title = data.get('title');
        if (typeof title !== 'string' || !title) {
            return;
        }

        toast({
            variant: 'orange',
            duration: 10000,
            title: `New : ${title} `,
            description: `Old : ${oldTitle}`,
            action: (
                <ToastAction
                    onClick={() => approve(id, title, oldTitle)}
                    altText='Try again'
                >
                    Approve Update
                </ToastAction>
            ),
        });
        // router.push("/dashboard/tag");
    }

    const approve = (id, title, oldTitle) => {
        updateTagAction(id, title, oldTitle);
        setNewTitle('');
        router.push('/dashboard/tag');
    };

    return (
        <>
            <div className='mx-auto flex w-full flex-col items-center justify-center gap-8 bg-zinc-700/50  p-4'>
                <div className='flex  w-full items-center justify-between'>
                    <h2 className='mb-2 font-medium'>Edit a New Tag</h2>
                    <Button
                        variant='blue'
                        size='sm'
                        onClick={() => router.back()}
                    >
                        Back
                    </Button>
                </div>

                <form
                    action={action}
                    className='flex w-full items-center justify-between'
                    id='edittagform'
                >
                    <input
                        type='text'
                        name='title'
                        value={newTitle}
                        className='rounded border border-slate-400 px-2 py-0.5'
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <Button
                        type='submit'
                        className='ml-2 px-2 py-1 text-sm  disabled:bg-destructive'
                        size='sm'
                    >
                        <AiOutlineEdit size={'20px'} />
                    </Button>
                </form>
            </div>
        </>
    );
};

export default EditTagForm;
