// 7-job_processor.js
import kue from 'kue';

const queue = kue.createQueue();

const blacklistedNumbers = ['4153518780', '4153518781'];

/**
 * Function to send notification
 * @param {string} phoneNumber
 * @param {string} message
 * @param {object} job
 * @param {function} done
 */
function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100);
  console.log(`Notification job #${job.id} 0% complete`);

  if (blacklistedNumbers.includes(phoneNumber)) {
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  job.progress(50, 100);
  console.log(`Notification job #${job.id} 50% complete`);

  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  done();
}

queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});

queue.on('job complete', (id) => {
  kue.Job.get(id, (err, job) => {
    if (err) return;
    console.log(`Notification job #${id} completed`);
    job.remove();
  });
});

queue.on('job failed', (id, errorMessage) => {
  console.log(`Notification job #${id} failed: ${errorMessage}`);
});
