using System;
using System.IO;
using System.Data;
using System.Configuration;

namespace SBS
{
    public class ContentReader
    {

        public static string GetContent(string sFilename)
        {
            return GetContent(sFilename, " ");
        }

        public static string GetContent(string sFilename, string sDefaultContent)
        {
            return GetContent(sFilename, sDefaultContent, false);
        }

        public static string GetContent(string sFilename, string sDefaultContent, bool blnRaw)
        {
            string sContnet = "";
            string line;
            StreamReader sr = null;
            try
            {
                sr = new StreamReader(sFilename);
            }
            catch (FileNotFoundException)
            {

                StreamWriter sw = new StreamWriter(sFilename);
                sw.Write(sDefaultContent);
                sw.Close();
                return sDefaultContent;
            }


            if (blnRaw)
                sContnet = sr.ReadToEnd();
            else
            {

                line = sr.ReadLine();
                while (line != null)
                {
                    sContnet += (formatLine(line) + "<br />");
                    //sContnet += (line + "<br />");
                    line = sr.ReadLine();
                }
            }


            sr.Close();

            return sContnet;


        }

        public static void SetContent(string sFilename, string sNewContent)
        {
            StreamWriter sw = new StreamWriter(sFilename);
            sw.Write(sNewContent);
            sw.Close();
        }

        static string formatLine(string sline)
        {

            if (sline.StartsWith("--++ "))
            {
                return "<span class=\"title\">" + sline.Substring(5) + "</span>";
            }
            else if (sline.StartsWith("--+++ "))
            {
                return "<span class=\"subtitle\">" + sline.Substring(6) + "</span>";
            }
            else if (sline.StartsWith("--++++ "))
            {
                return "<span class=\"phonetitle\">" + sline.Substring(6) + "</span>";
            }
            else if (sline.StartsWith("--tt "))
            {
                return "<span class=\"smalltext\">" + sline.Substring(5) + "</span>";
            }
            else if (sline.StartsWith("--ss "))
            {
                return "<span class=\"sidebartitle\">" + sline.Substring(5) + "</span>";
            }

            else
                return sline;


        }
    }
}
