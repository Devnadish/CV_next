'use client';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AddReplay } from '@/pagecomponent/blog/Quastion/backend/quastion_action';
const AddReplayComponent = ({ Question }) => {
    const [replay, setReplay] = useState('');
    const handleAddReplay = async (data) => {
        const userID = 'dummy';
        const userAvatar = 'dummy';
        await AddReplay(replay, Question, userID, userAvatar);
    };
    return (
        <form
            action={handleAddReplay}
            id='replayform'
            className='flex w-full flex-col  items-center gap-4 px-4'
        >
            <Textarea
                placeholder='Write Your Answer Plaease ?'
                name='answerData'
                className='resize-none'
                rows='10'
                value={replay}
                onChange={(e) => setReplay(e.target.value)}
            />
            <div className='flex  w-full items-center justify-between'>
                <Button
                    type='button'
                    variant='outline'
                    className='self-end'
                    onClick={() => setReplay('')}
                >
                    clear
                </Button>
                <Button type='submit' variant='outline' className='self-end'>
                    Submit
                </Button>
            </div>
        </form>
    );
};
export default AddReplayComponent;
