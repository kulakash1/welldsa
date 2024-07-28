import { Request, Response } from 'express';
import Progress from '../models/ProgressModel';

export const getProgressByUser = async (req: Request, res: Response) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId }).populate('courseId');
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progress', error });
  }
};

export const updateProgress = async (req: Request, res: Response) => {
  try {
    const updatedProgress = await Progress.findOneAndUpdate(
      { userId: req.params.userId, courseId: req.params.courseId },
      req.body,
      { new: true }
    );
    if (!updatedProgress) {
      return res.status(404).json({ message: 'Progress not found' });
    }
    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(500).json({ message: 'Error updating progress', error });
  }
};
