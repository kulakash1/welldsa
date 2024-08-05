// controllers/userController.ts
import { Request, Response } from 'express';
import CourseModel from '../models/course';
import VideoModel from '../models/videos';
import DocumentModel from '../models/document';


export const createCourse = async (req: Request, res: Response) => {
  try {

    console.log(req.body);

    let newCourse = new CourseModel({
        name: req.body.name,
        domain: req.body.domain,
        track: req.body.track,
      });
  
      newCourse = await newCourse.save();
  
      res.status(201).json(newCourse);
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

export const createVideo = async (req: Request, res: Response) => {
    try {
  
        console.log(req.body);

        let newVideo = new VideoModel({
            title: req.body.title,
            link: req.body.link,
            courseId: "66ac96366c6d9c97099b159a",
            details: {
                discription: req.body.details.discription
            }
        })
    
        newVideo = await newVideo.save();
    
        res.status(201).json(newVideo);
  
      
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  };

  
export const createDocument = async (req: Request, res: Response) => {
    try {
  
        console.log(req.body);

        let newVideo = new DocumentModel({
            title: req.body.title,
            link: req.body.link,
            courseId: "66ac96366c6d9c97099b159a",
            details: {
                discription: req.body.details.discription
            }
        })
    
        newVideo = await newVideo.save();
    
        res.status(201).json(newVideo);
  
      
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  };