// 6-job_processor.js
import kue from 'kue';

const queue = kue.createQueue(); // Connexion à Redis par défaut

function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

// Écoute des jobs 'push_notification_code'
queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message);
  done();
});

// Supprime automatiquement les jobs terminés pour ne pas encombrer Redis
queue.on('job complete', (id) => {
  kue.Job.get(id, (err, job) => {
    if (err) return;
    job.remove();
  });
});
